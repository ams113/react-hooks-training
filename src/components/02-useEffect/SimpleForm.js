import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState( {
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
       console.log('het!');
    }, []);

    const handleInputChange = ( {target} ) => {

        setFormState({
            ...formState,
            [target.name]:target.value
        });
    };

    return (
        <div>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange } 
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange } 
                />
            </div>

            { name==='123' && <Message />}

        </div>
    )
}
