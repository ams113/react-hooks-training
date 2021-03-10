import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UseContext';
import { LoginPage } from '../../../components/09-useContext/LoginPage';

describe('Testing Components: useContext/LoginPage', () => {

    const user = { id: 'asb', name: 'toni'};

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={ { setUser } }> 
            <LoginPage /> 
        </UserContext.Provider>
    );

    
   
    test('should login renders correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should run setUser with the expected argument', () => {
        wrapper.find('button').prop('onClick')();
        expect( setUser ).toHaveBeenCalledWith( user )
    })
    
   

});