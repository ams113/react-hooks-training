import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoItem } from '../../../components/08-useReducer/TodoItem';
import { fakeTodos } from '../../fixtures/fakeTodos';


describe('Testing Components: TodoItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const demoTodos = fakeTodos[0];
    demoTodos.done = true;

    const wrapper = shallow(
        <TodoItem 
            item={ demoTodos } 
            index={ 0 } 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
        /> 
    );

    test('should renders correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('should call the handleDelete function', () => {
        
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos.id );

    });

    test('should call the handleToggle function', () => {
        
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos.id );
    });

    test('should text correctly', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`${0 + 1}. ${demoTodos.desc}`);
        
    })

    test('should have completed class if TODO.done = true', () => {
        const p = wrapper.find('p');
        expect( p.hasClass('completed') ).toBe(true);

    });

   

});