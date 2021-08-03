import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TodoList from './TodoList';
import { addTodo, clearTodo, massAdd } from '../../ducks/todo';

/*
This component is responsible for rendering actual body content -
inputChange : being used to get user entered text
onSubmit/ actionAddTodo : being used to update redux store & clear text area
massAction: being used to update all status on single go
clearAction: being used to clear all todos from store
*/
const AllTodo = ({ 
    actionAddTodo, 
    todos, 
    actionClearTodo, 
    actionMassAddTodo 
}) => {
    const [input, setInput] = useState(''); 

    const inputChange = event => { setInput(event.target.value); }

    const onSubmit = event => {
        event.preventDefault();
        actionAddTodo(input);
        setInput('');
    }

    const inCompleteAction = () => {
        const updatedTodos = todos.map(item => {
            var temp = Object.assign({}, item);
            temp.completed = false;
            return temp;
        });
        actionClearTodo();
        actionMassAddTodo(updatedTodos);
    };

    const completeAction = () => {
        const updatedTodos = todos.map(item => {
            var temp = Object.assign({}, item);
            temp.completed = true;
            return temp;
        });
        actionClearTodo();
        actionMassAddTodo(updatedTodos);
    };

    const clearAction = () => {
        actionClearTodo();
    };

    return (
        <div className="main-card">
            <Card className="card-container">
                <CardContent className="card-content">
                    <div className="first-section">
                        <div className="heading-label">What needs to be done?</div>
                        <form onSubmit={onSubmit}>
                            <div className="input-text">
                                <div>
                                    <TextField className="text-box" id="input" label="Input your TODOs..." onChange={inputChange} value={input} />
                                </div>
                                <span>
                                    <Button className="add-button" variant="contained" type='submit'>Add</Button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <TodoList />
                </CardContent>
            </Card>
            <div className="mass-container">
                <Button className="mass-buttons" variant="contained" color="primary" onClick={completeAction}>
                    Mark all as complete
                </Button>
                &nbsp;
                <Button className="mass-buttons" variant="contained" color="primary" onClick= {inCompleteAction}>
                    Mark all as incomplete
                </Button>
                &nbsp;
                <Button className="mass-buttons" variant="contained" color="primary" onClick= {clearAction}>
                    Clear all
                </Button>
            </div>
        </div>    
    )
};

AllTodo.propTypes = {
    actionAddTodo: PropTypes.func.isRequired,
    actionClearTodo: PropTypes.func.isRequired,
    actionMassAddTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
}

export const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchAsProps = dispatch => {
    return {
        actionAddTodo: value => dispatch(addTodo(value)),
        actionClearTodo: () => dispatch(clearTodo()),
        actionMassAddTodo: data => dispatch(massAdd(data)),
    };
}

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { AllTodo as TestableAllTodo };

export default hocChain(AllTodo);