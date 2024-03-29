import { useCallback, useEffect, useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import blueCandy from './images/blue.png';
import greenCandy from './images/green.png';
import pinkCandy from './images/pink.png';
import purpleCandy from './images/purple.png';
import redCandy from './images/red.png';
import yellowCandy from './images/yellow.png';
import blank from './images/yellow.png';

const width = 8;
const candyColors = [
    blueCandy,
    greenCandy,
    pinkCandy,
    purpleCandy,
    redCandy,
    yellowCandy,
];


function App() {

    const [arrangeColors, setArrangeColors] = useState([]);
    const [squareBeingDragged, setSquareBeingDragged] = useState(null);
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
    const [score, setScore] = useState(0);

    // # Generate colors
    const boardColors = [];
    const generateColors = () => {
        for (let i = 0; i < width * width; i++) {
            boardColors.push(candyColors[Math.floor(Math.random() * candyColors.length)]);
        }
        setArrangeColors(boardColors);
    };

    useEffect(() => {
        generateColors();
    }, []);


    const moveColorsDown = useCallback(() => {
        for (let i = 0; i < 64 - width; i++) {

            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);

            if (isFirstRow && arrangeColors[i] === blank) {
                let randomNumber = Math.floor(Math.random() * candyColors.length);
                arrangeColors[i] = candyColors[randomNumber];
            }

            if ((arrangeColors[i + width]) === blank) {
                arrangeColors[i + width] = arrangeColors[i];
                arrangeColors[i] = blank;
            }
        }
    }, [arrangeColors]);

    // # Check for column of three
    const checkForColumnOfThree = useCallback(() => {
        for (let i = 0; i < 48; i++) {
            const columnOfThree = [i, i + width, i + width * 2];
            const decidedColor = arrangeColors[i];

            if (columnOfThree.every(square => arrangeColors[square] === decidedColor)) {
                setScore((prevScore) => prevScore + 30);
                columnOfThree.forEach(square => arrangeColors[square] = blank);
                return true;
            }
        }
    }, [arrangeColors]);

    // # Check for column of four
    const checkForColumnOfFour = useCallback(() => {
        for (let i = 0; i < 40; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
            const decidedColor = arrangeColors[i];

            if (columnOfFour.every(square => arrangeColors[square] === decidedColor)) {
                setScore((prevScore) => prevScore + 40);
                columnOfFour.forEach(square => arrangeColors[square] = blank);
                return true;
            }
        }
    }, [arrangeColors]);


    // # Check for row of three
    const checkForRowOfThree = useCallback(() => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2];
            const decidedColor = arrangeColors[i];

            const invalidIndex = [6, 7, 13, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];

            if (invalidIndex.includes(i)) {
                continue;
            }

            if (rowOfThree.every(square => arrangeColors[square] === decidedColor)) {
                setScore((prevScore) => prevScore + 30);
                rowOfThree.forEach(square => arrangeColors[square] = blank);
                return true;
            }
        }
    }, [arrangeColors]);

    // # Check for row of four
    const checkForRowOfFour = useCallback(() => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3];
            const decidedColor = arrangeColors[i];

            const invalidIndex = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];

            if (invalidIndex.includes(i)) {
                continue;
            }

            if (rowOfFour.every(square => arrangeColors[square] === decidedColor)) {
                setScore((prevScore) => prevScore + 40);
                rowOfFour.forEach(square => arrangeColors[square] = blank);
                return true;
            }
        }
    }, [arrangeColors]);

    useEffect(() => {

        const timer = setTimeout(() => {

            checkForColumnOfThree();
            checkForColumnOfFour();
            checkForRowOfThree();
            checkForRowOfFour();
            moveColorsDown();
            setArrangeColors([...arrangeColors]);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [checkForColumnOfThree, arrangeColors, checkForColumnOfFour, checkForRowOfThree, checkForRowOfFour, moveColorsDown]);


    const dragStart = (e) => {
        console.log('drag start');
        console.log(e.target);
        setSquareBeingDragged(e.target);
    };

    const dragDrop = (e) => {
        console.log('drag drop');
        console.log(e.target);
        setSquareBeingReplaced(e.target);
    };

    const dragEnd = (e) => {
        console.log('drag end');
        const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'));
        const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'));

        arrangeColors[squareBeingReplacedId] = squareBeingDragged.getAttribute('src');
        arrangeColors[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src');

        const validMoves = [
            squareBeingDraggedId - 1,
            squareBeingDraggedId - width,
            squareBeingDraggedId + 1,
            squareBeingDraggedId + width
        ];

        const validMove = validMoves.includes(squareBeingReplacedId);

        const isAColumnOfThree = checkForColumnOfThree();
        const isAColumnOfFour = checkForColumnOfFour();
        const isARowOfThree = checkForRowOfThree();
        const isARowOfFour = checkForRowOfFour();

        if (squareBeingReplaced &&
            validMove && (isAColumnOfThree || isAColumnOfFour || isARowOfThree || isARowOfFour)) {
            setSquareBeingDragged(null);
            setSquareBeingReplaced(null);
        } else {
            arrangeColors[squareBeingReplacedId] = squareBeingDragged.getAttribute('src');
            arrangeColors[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src');
            setArrangeColors([...arrangeColors]);
        }
    };

    return (
        <>
            <ScoreBoard score={score} />
            <div className='app'>
                <div className='app-wrapper'>
                    {arrangeColors.map((color, index) => (
                        <img
                            src={color}
                            alt='candy'
                            key={index}
                            className='color'
                            data-id={index}
                            draggable={true}
                            onDragStart={dragStart}
                            onDragOver={(e) => e.preventDefault()}
                            onDragEnter={(e) => e.preventDefault()}
                            onDragLeave={(e) => e.preventDefault()}
                            onDrop={dragDrop}
                            onDragEnd={dragEnd}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}

export default App;
