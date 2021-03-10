import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ item, index, handleDelete, handleToggle }) => {
    
    return (

        <li key={item.id} className="list-group-item">
            <p
                className={`${item.done && 'completed'}`} 
                onClick={ () => handleToggle(item.id) }
            >
                {index + 1}. {item.desc}
            </p>

            <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
            >
                Delete
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};