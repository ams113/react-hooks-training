import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './style.css';
export const Layout = () => {

    const { count, increment } = useCounter(1);
    const [boxSize, setBoxSize] = useState({});

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${count}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
        
    }, [quote]);
    

    return (
        <>

            <p className="head">LayoutEffect</p>          
            <h1 className="title">
                BreakingBad&nbsp;
                 <span className="quotes">Quotes</span>
            </h1>
            <hr />

           
                    
            <blockquote className="blockquote"> 
                <p ref={ pTag }> {quote} </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3)}
            </pre>
                
            <button 
                className="btn btn-outline-warning"
                onClick={ () => increment() }
            >
                Next quote
            </button>
                    
            
        

                    
         
        </>
    )
}
