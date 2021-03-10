import React, { useContext } from 'react'
import { UserContext } from './UseContext'
import './style.css';
export const HomePage = () => {

    const { user } = useContext(UserContext);
  
    return (
        <main className="main-content">
            <h1>HomePage</h1>

            <pre>
                { JSON.stringify(user, null, 3 ) }
            </pre>
        </main>
    )
}
