import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './style.css';

export const CounterCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);
    const factor = 2;

    return (
        <>
            <h1>Couter with Hook: { state }</h1>
            <hr />
            

            <button onClick={ () => increment( factor) } className="btn btn-primary">
                 +{factor}
            </button>
            <button onClick={ reset } className="btn btn-dark">
                 Reset
            </button>
            <button onClick={ () => decrement(2) } className="btn btn-primary">
                 -{factor} 
            </button>

        </>
    )
}
