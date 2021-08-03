import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleTodo } from '../../ducks/todo';
import Checkbox from '@material-ui/core/Checkbox';

/*
This component is responsible for viewing todo items -
actionToggleTodo : being used to update status to complet/incomplete in store
*/
const Todo = ({ 
    actionToggleTodo, 
    id, 
    completed, 
    text 
}) => (
    <li>
        <label style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {text}
        </label>
        <Checkbox 
            onChange={() => actionToggleTodo(id)} 
            checked={completed} 
        />
    </li>
);

Todo.propTypes = {
    actionToggleTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

const mapDispatchAsProps = dispatch => {
    return {
        actionToggleTodo: value => dispatch(toggleTodo(value)),
    };
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);

export { Todo as TestableTodo };

export default hocChain(Todo);
