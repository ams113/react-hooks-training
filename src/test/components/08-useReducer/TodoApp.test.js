import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { fakeTodos } from '../../fixtures/fakeTodos';
import { act } from '@testing-library/react';

describe('Testing Components: TodoApp', () => {

    const wrapper = shallow( <TodoApp /> );

    Storage.prototype.setItem = jest.fn();
   
    test('should renders correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should add TODO', () => {

        const wrapper = mount(<TodoApp />);

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( fakeTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')( fakeTodos[1]);
        });

        expect( wrapper.find('h1').text().trim() ).toBe(`TodoApp (${ fakeTodos.length })`);
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });

    test('should delete TODO', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')( fakeTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')( fakeTodos[0].id);

        expect( wrapper.find('h1').text().trim() ).toBe(`TodoApp (0)`);
    });

});
