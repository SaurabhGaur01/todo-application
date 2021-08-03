import { combineReducers } from 'redux';
import { todosReducer as todos } from '../ducks/todos';
import { viewReducer as viewMode } from '../ducks/view';

export default combineReducers({
    todos,
    viewMode
})