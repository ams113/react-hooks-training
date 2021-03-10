import React from 'react'
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {

    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((item, index) => (
                    <TodoItem 
                        key={item.id}
                        item={item}
                        index={index}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};