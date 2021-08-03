import { VIEW_SHOW_ALL } from '../constants/view';

export const SET_VIEW = 'modules/todo-app/SET_VIEW';

export const setView = (filter) => ({
    type: SET_VIEW,
    filter
})

export const viewReducer = (state = VIEW_SHOW_ALL, action = { type: 'NULL_ACTION'}) => {
    switch (action.type) {
      case SET_VIEW:
        return action.filter
      default:
        return state
    }
}