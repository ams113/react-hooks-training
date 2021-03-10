import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Testing Components: TodoAdd', () => {

    const handleAddTodo = jest.fn();
    const preventDefault = jest.fn();

    const wrapper = shallow(
        <TodoAdd handleAddTodo={handleAddTodo} /> 
    );
   
    test('should renders correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have not call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');

        // formSubmit({ preventDefault(){} });
        formSubmit({ preventDefault });
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });

    test('should have call handleAddTodo correctly', () => {

        const value = 'Learn React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault });

        //* Pass de test if de object is empty {} :(
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any( Object ));

        //? Other option more precise
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        
        //? Eval form reset input value
        expect( wrapper.find('input').prop('value') ).toBe('');

        
    });
    
    
});
