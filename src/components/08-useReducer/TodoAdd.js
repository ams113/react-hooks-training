import React from 'react';
import { useForm } from '../../hooks/useForm';
import PropTypes from 'prop-types';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const desc = description.trim();

        if ( desc.length <= 1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc,
            done: false,
        };

        handleAddTodo( newTodo );

        reset();

    };

    return (
        <>
            <h4>Add TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Learn ..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block">
                            Add
                    </button>
                </div>
            </form>
        </>
    )
}

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
};