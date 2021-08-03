import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Todo from './Todo';
import { VIEW_SHOW_ACTIVE, VIEW_SHOW_COMPLETED, VIEW_SHOW_ALL } from '../../constants/view';

/*
This component is responsible for iterating and choosing selected todos to view -
*/
const TodoList = ({ 
  todos, 
  viewMode 
}) => {
  let selectedTodo = [];
  if(viewMode === VIEW_SHOW_ALL) selectedTodo = todos;
  if(viewMode === VIEW_SHOW_COMPLETED) selectedTodo = todos.filter(item => item.completed);
  if(viewMode === VIEW_SHOW_ACTIVE) selectedTodo = todos.filter(item => !item.completed);
  return (
    <ul>
      {selectedTodo.map(({ id, text, completed }) =>
          <div key={id}>
            <Todo id={id} completed={completed} text={text} />
          </div>
      )}
    </ul>
  )
};

TodoList.propTypes = {
  viewMode: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export const mapStateToProps = state => ({
  todos: state.todos,
  viewMode: state.viewMode,
});

const hocChain = compose(
  connect(mapStateToProps),
);

export { TodoList as TestableTodoList };

export default hocChain(TodoList);
