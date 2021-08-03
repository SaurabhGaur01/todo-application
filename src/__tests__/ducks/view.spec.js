import {
    setView,
    viewReducer,
} from '../../ducks/view';

import {  VIEW_SHOW_ALL } from '../../constants/view';

describe('view Duck Tests', () => {
    const mockState = {
        key: 'mockKey',
    }

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setView should match the snapshot' , () => {
            expect(setView()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(viewReducer()).toEqual(VIEW_SHOW_ALL);
        });
        it('should return the passed state if called with no action' , () => {
            expect(viewReducer(mockState)).toBe(mockState);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(viewReducer(mockState, unknownAction)).toBe(mockState);
        });
    });
})