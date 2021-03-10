import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from "../../../components/03-examples/multipleCustomHooks";
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

//? Mocks
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Testing Components: MultipleCustomHooks', () => {

    beforeEach( () => { 

        useCounter.mockReturnValue({
            count: 10,
            increment: () => {}
        });

    });

    
    test('should renders correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });


        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('should show info', () => {
        
        useFetch.mockReturnValue({
            data: [{author: 'toni', quote: 'Ya te digo'}],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('p').text().trim() ).toBe( 'Ya te digo' );
        expect( wrapper.find('.blockquote-footer').text().trim() ).toBe( 'toni' );

    });
    
    
});
