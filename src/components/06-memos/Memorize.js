import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './style.css';

export const Memorize = () => {

    const [show, setShow] = useState(true);

    const {count, increment } = useCounter(0);


    return (
        <div>
            <h1>Memorize</h1>
            <h4>Couter: <Small value={ count } /></h4>

            <button 
                className="btn btn-success mt-5"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button 
                className="btn btn-dark mt-5 ml-5"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show )}
            </button>
        </div>
    )
}
