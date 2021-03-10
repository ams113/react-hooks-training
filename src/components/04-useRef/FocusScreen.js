import React, { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = ( e ) => {
        // document.querySelector('input').select();
        inputRef.current.select();
    };
    
    return (
        <div>
            <h1>FocusScreen</h1>

            <input 
                ref={inputRef}
                type="text" 
                className="form-control"
                placeholder="your name"
            />

            <button 
                className="btn btn-outline-dark mt-5"
                onClick={ handleClick }>
                Focus
            </button>
        </div>
    )
}
