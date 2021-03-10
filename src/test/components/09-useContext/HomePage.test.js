import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { HomePage } from '../../../components/09-useContext/HomePage';
import { UserContext } from '../../../components/09-useContext/UseContext';

describe('Testing Components: useContext/HomePage', () => {

    const user = {
        user: 'toni',
        email: 'toni@gmail.com'
    };

    const wrapper = mount( 
        <UserContext.Provider value={ user }> 
            <HomePage /> 
        </UserContext.Provider>
    );

    
   
    test('should renders correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

   

});
