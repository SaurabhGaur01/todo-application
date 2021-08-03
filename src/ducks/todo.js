import { ADD_TODO, CLEAR_TODO, MASS_ADD, TOGGLE_TODO } from '../constants/todos';

let nextTodoId = 0
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const clearTodo = () => ({
  type: CLEAR_TODO
});

export const massAdd = data => ({
  type: MASS_ADD,
  data
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});