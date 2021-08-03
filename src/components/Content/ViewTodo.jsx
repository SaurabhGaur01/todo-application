import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

/*
This component is responsible for displaying todo item with checkbox and label
*/
const ViewTodo = ({ 
  id, 
  onClick, 
  completed, 
  text 
}) => (
  <li key={id}>
    <Checkbox onClick={onClick} checked={completed} label={(
      <label style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </label>
    )}/>
  </li>
);

ViewTodo.propTypes = {
  id: PropTypes.number.isRequired,  
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default ViewTodo;