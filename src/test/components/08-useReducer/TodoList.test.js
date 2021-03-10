import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { fakeTodos } from '../../fixtures/fakeTodos';
import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Testing Components: TodoList', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={ fakeTodos } 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
        />
    );

    test('should renders correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('should have two <TodoItem />', () => {
        
        expect( wrapper.find('TodoItem').length ).toBe( fakeTodos.length );
        expect( wrapper.find('TodoItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
    
});
