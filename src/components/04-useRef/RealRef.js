import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealRef = () => {


    const [show, setShow] = useState(false);

    return (
        <>
            <div>
                <h1>RealRef</h1>

                { show && <MultipleCustomHooks /> }
            </div>
            <button 
            className="btn btn-dark mt-5"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide
        </button>
    </>
    )
}
