import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { RealRef } from '../../../components/04-useRef/RealRef';

describe('Testing Components: RealRef', () => {

    const wrapper = shallow( <RealRef /> );

   
    test('should renders correctly', () => {
         
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    
});

test('should show component <MultipleCustomHooks />', () => {
    
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
  
    });
    
});
