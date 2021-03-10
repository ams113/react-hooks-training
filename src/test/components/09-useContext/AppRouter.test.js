import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UseContext';
import { LoginPage } from '../../../components/09-useContext/LoginPage';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Testing Components: useContext/AppRouter', () => {

    const user = { id: 'asb', name: 'toni'};

    const wrapper = mount(
        <UserContext.Provider value={ { user } }> 
            <AppRouter />
        </UserContext.Provider>
    );

    test('should renders correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    
 
    
   

});