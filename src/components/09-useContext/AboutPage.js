import React, { useContext } from 'react'
import './style.css';
import { UserContext } from './UseContext';

export const AboutPage = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    };
    
    return (
        <main className="main-content">
            <h1>AboutPage</h1>

            <hr />

            <pre>
                { JSON.stringify(user, null, 3 ) }
            </pre>
            
            <button 
                onClick={ handleClick }
                className="btn btn-warning">
                    Login
            </button>
        </main>
    )
}
