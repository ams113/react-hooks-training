import React, { useContext } from 'react'
import { UserContext } from './UseContext';
import './style.css';

export const LoginPage = () => {

    const { setUser } = useContext(UserContext);

    return (
        <main className="main-content">
            <h1>LoginPage</h1>
            <hr />
            <button 
                onClick={ ()=> setUser({ id: 'asb', name: 'toni'})}
                className="btn btn-dark">
                    Login
            </button>
        </main>
    )
}
