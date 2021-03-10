import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Testing hooks: useCounter', () => {
    
    test('should with no props return initial state', () => {

        const { result } = renderHook( () => useCounter() );

        expect( result.current.count ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    });

    test('should have the count at 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.count ).toBe(100);
    });

    test('should increase the count by 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act (() => {
            increment();
        });

        expect( result.current.count ).toBe(101);
    });

    test('should increase the count by 2', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act (() => {
            increment(2);
        });

        expect( result.current.count ).toBe(102);
    });

    test('should decrement the count by 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act (() => {
            decrement();
        });

        expect( result.current.count ).toBe(99);
    });

    test('should decrement the count by 2', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act (() => {
            decrement(2);
        });

        expect( result.current.count ).toBe(98);
    });

    test('should reset the count at 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement, increment, reset } = result.current;

        act (() => {
            decrement(2);
            increment();
            reset();
        });

        expect( result.current.count ).toBe(100);
    });
    

});

