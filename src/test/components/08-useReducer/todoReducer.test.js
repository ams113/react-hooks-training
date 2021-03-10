import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { fakeTodos } from "../../fixtures/fakeTodos";

describe('Testing components: TodoReducer', () => {

    test('should return default state', () => {
        
        const state = todoReducer( fakeTodos, {} );
        expect( state ).toEqual( fakeTodos );
    });

    test('should add TODO', () => {

        const newTodo = {
                id: 3,
                desc: 'Learn Mongo',
                done: false,
        };
        
        const action = { 
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer( fakeTodos, action );

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...fakeTodos, newTodo] );
        
    });

    test('should delete TODO', () => {
        
        const action = { 
            type: 'delete',
            payload: 2
        };

        const state = todoReducer( fakeTodos, action );

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [fakeTodos[0]] );
        
    });

    test('should do TOGGLE TODO', () => {
        
        const action = { 
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer( fakeTodos, action );

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toBe( fakeTodos[1] );
    });
    
});