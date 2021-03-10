import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Testing App: HooksApp', () => {

    test('should renders correctly', () => {

        const wrapper = shallow( <HooksApp />);
        expect( wrapper ).toMatchSnapshot();
    });

});