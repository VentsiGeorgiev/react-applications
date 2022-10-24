import { useCallback, useEffect, useState } from 'react';

const width = 8;
const candyColors = [
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'yellow',
];


function App() {

    const [arrangeColors, setArrangeColors] = useState([]);

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

            if (isFirstRow && arrangeColors[i] === '') {
                let randomNumber = Math.floor(Math.random() * candyColors.length);
                arrangeColors[i] = candyColors[randomNumber];
            }

            if ((arrangeColors[i + width]) === '') {
                arrangeColors[i + width] = arrangeColors[i];
                arrangeColors[i] = '';
            }
        }
    }, [arrangeColors]);

    // # Check for column of three
    const checkForColumnOfThree = useCallback(() => {
        for (let i = 0; i < 48; i++) {
            const columnOfThree = [i, i + width, i + width * 2];
            const decidedColor = arrangeColors[i];

            if (columnOfThree.every(square => arrangeColors[square] === decidedColor)) {
                columnOfThree.forEach(square => arrangeColors[square] = '');
            }
        }
    }, [arrangeColors]);

    // # Check for column of four
    const checkForColumnOfFour = useCallback(() => {
        for (let i = 0; i < 40; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
            const decidedColor = arrangeColors[i];

            if (columnOfFour.every(square => arrangeColors[square] === decidedColor)) {
                columnOfFour.forEach(square => arrangeColors[square] = '');
            }
        }
    }, [arrangeColors]);


    // # Check for row of three
    const checkFoRowOfThree = useCallback(() => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2];
            const decidedColor = arrangeColors[i];

            const invalidIndex = [6, 7, 13, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];

            if (invalidIndex.includes(i)) {
                continue;
            }

            if (rowOfThree.every(square => arrangeColors[square] === decidedColor)) {
                rowOfThree.forEach(square => arrangeColors[square] = '');
            }
        }
    }, [arrangeColors]);

    // # Check for row of four
    const checkFoRowOfFour = useCallback(() => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3];
            const decidedColor = arrangeColors[i];

            const invalidIndex = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];

            if (invalidIndex.includes(i)) {
                continue;
            }

            if (rowOfFour.every(square => arrangeColors[square] === decidedColor)) {
                rowOfFour.forEach(square => arrangeColors[square] = '');
            }
        }
    }, [arrangeColors]);

    useEffect(() => {

        const timer = setTimeout(() => {

            checkForColumnOfThree();
            checkForColumnOfFour();
            checkFoRowOfThree();
            checkFoRowOfFour();
            moveColorsDown();
            setArrangeColors([...arrangeColors]);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [checkForColumnOfThree, arrangeColors, checkForColumnOfFour, checkFoRowOfThree, checkFoRowOfFour, moveColorsDown]);



    return (
        <div className='app'>
            <div className='app-wrapper'>
                {arrangeColors.map((color, index) => (
                    <div
                        key={index}
                        className='color'
                        style={{ backgroundColor: color }}
                    >

                    </div>
                ))}
            </div>

        </div>
    );
}

export default App;
