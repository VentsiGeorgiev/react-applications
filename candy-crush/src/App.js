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
