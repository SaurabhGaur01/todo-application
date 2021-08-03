import {
    addTodo,
    clearTodo,
    toggleTodo,
    massAdd
} from '../../ducks/todo';

import { todosReducer } from '../../ducks/todos';
import { MASS_ADD, ADD_TODO } from '../../constants/todos';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

const mockKey = 'mockValue';

describe('todo Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('addTodo should match the snapshot' , () => {
            expect(addTodo(mockKey)).toMatchSnapshot();
        });
        it('clearTodo should match the snapshot' , () => {
            expect(clearTodo()).toMatchSnapshot();
        });
        it('toggleTodo should match the snapshot' , () => {
            expect(toggleTodo(mockKey)).toMatchSnapshot();
        });
        it('massAdd should match the snapshot' , () => {
            expect(massAdd(mockObject)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(todosReducer('', { type: ''})).toEqual('');
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(todosReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should clear the store when called with clearRepoData' , () => {
            expect(todosReducer(mockObject, clearTodo())).toEqual([]);
        });
    });
});