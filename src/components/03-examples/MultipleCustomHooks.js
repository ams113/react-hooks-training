import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './style.css';

export const MultipleCustomHooks = () => {

    const { count, increment } = useCounter(1);

    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${count}`);
    const {author, quote } = !!data && data[0];
    

    return (
        <>
          
            <h1 className="title">
                BreakingBad&nbsp;
                 <span className="quotes">Quotes</span>
            </h1>
            <hr />

            {
                loading ? (

                    <div className="alert alert-success text-center">
                        Loading...
                    </div>
                )
                :  (
                    <>
                        <blockquote className="blockquote text-right"> 
                        <p> {quote} </p>
                        <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                            
                        <button 
                            className="btn btn-outline-warning"
                            onClick={ () => increment() }
                        >
                            Next quote
                        </button>
                    </>
                )

            }

                    
         
        </>
    )
}
