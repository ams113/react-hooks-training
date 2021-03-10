import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0});
    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = ( e ) => {
            setCoords({ x: e.x, y: e.y });
        };
        
        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Component unmount');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>yeah Bro!</h3>
            <p>Coords => x: {x} y: {y}</p>
        </div>
    )
}
