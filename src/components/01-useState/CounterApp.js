import React, { useState } from 'react';

export const CounterApp = () => {

    const [state, setState] =  useState({
        counter1: 10,
        counter2: 20,
        counter3: 40,
        counter4: 50
    });

    const { counter1, counter2, counter4} = state;

    return (
        <>
            <h1>Couter { counter1 }</h1>
            <h1>Couter { counter2 }</h1>
            <h1>Couter { counter4 }</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ ( ) => {

                    setState({
                        ...state,
                        counter1: counter1 + 1,
                        counter2: counter2 + 2,
                    })

                }}>
                + 1
            </button>
        </>
    )
}
