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
    const generateColors = () => {
        const boardColors = [];
        for (let i = 0; i < width * width; i++) {
            boardColors.push(candyColors[Math.floor(Math.random() * candyColors.length)]);
        }
        setArrangeColors(boardColors);
    };

    useEffect(() => {
        generateColors();
    }, []);

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

    useEffect(() => {

        const timer = setTimeout(() => {

            checkForColumnOfThree();
            checkForColumnOfFour();
            setArrangeColors([...arrangeColors]);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [checkForColumnOfThree, arrangeColors, checkForColumnOfFour]);



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
