import React, { useState } from 'react';
 

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const moveCircle = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Attach the mousemove event listener
    React.useEffect(() => {
        window.addEventListener('mousemove', moveCircle);
        return () => {
            window.removeEventListener('mousemove', moveCircle);
        };
    }, []);

    return (
        <div>
            <div
                className="circle"
                style={{
                    position: 'fixed',
                    backgroundColor: '#D45B4C',
                    width: '10px',
                    height: '10px',
                    borderRadius: '100%',
                    zIndex: 5,
                    left: `${cursorPosition.x - 10}px`,
                    top: `${cursorPosition.y - 10}px`,
                    transform: 'scale(1)',
                }}
            ></div>
            <div
                className="circle-follow"
                style={{
                    position: 'fixed',
                    border: '1px solid #D45B4C',
                    width: '30px',
                    height: '30px',
                    borderRadius: '100%',
                    zIndex: 5,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    left: `${cursorPosition.x - 21}px`,
                    top: `${cursorPosition.y - 21}px`,
                    transform: 'scale(1)',
                }}
            ></div>
        </div>
    );
};

export default Cursor;