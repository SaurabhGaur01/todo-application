import React from 'react';
import { shallow } from 'enzyme';
import { TestableTodoList, mapStateToProps } from '../../components/Content/TodoList';

describe('TodoList Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            viewMode: 'SHOW_ALL',
            todos: [
                {
                    id: 1,
                    completed: true,
                    text: 'mockText',
                }
            ],
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableTodoList {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
        const todosMock = [{
            id: 1,
            completed: true,
            text: 'mockText',
        }];
        
        const mockedState = {
            todos: todosMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    todos: todosMock,
                }
            )
        })
    })
})