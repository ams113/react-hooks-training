import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Testing hooks: useForm', () => {


    const initialForm = { name: 'toni', email: 'toni@gmail.com'};
   
    test('should return default form', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' ); 
    });

    test('should set form name', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        const input = { target: { name: 'name', value: 'pepe' } };
        const newForm = { name: 'pepe', email: 'toni@gmail.com'};

        act (() => {
            handleInputChange(input);
        });

        const [ formValues ] = result.current;
        

        expect( formValues ).toEqual( newForm );
        
    });

    test('should set form email', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        const input = { target: { name: 'email', value: 'pepe@gmail.com' } };
      
        act (() => {
            handleInputChange(input);
        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( {...initialForm, email: 'pepe@gmail.com'} );
        
    });

    test('should reset form', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;
        const input = { target: { name: 'email', value: 'pepe@gmail.com' } };
      
        act (() => {
            handleInputChange(input);

            reset();

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
        
    });
    
});
