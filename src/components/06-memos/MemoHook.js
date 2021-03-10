import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProccess';
import { useCounter } from '../../hooks/useCounter';

import './style.css';

export const MemoHook = () => {

    const [show, setShow] = useState(true);
    const {count, increment } = useCounter(1000);

    const memoHeavyProcess = useMemo(() => heavyProcess( count ), [count]);
    


    return (
        <div>
            <h1>MemoHook</h1>
            <h4>Couter: <small>{ count }</small></h4>
            <hr />
            <p>{ memoHeavyProcess } </p>

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

