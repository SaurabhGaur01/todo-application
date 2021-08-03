import React from 'react';
import { shallow } from 'enzyme';
import { TestableAllTodo, mapStateToProps } from '../../components/Content/AllTodo';

describe('AllTodo Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionAddTodo: jest.fn(),
            actionClearTodo: jest.fn(),
            actionMassAddTodo: jest.fn(),
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
        const renderedModule = shallow(<TestableAllTodo {...props} />);
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