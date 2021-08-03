import React from 'react';
import { shallow } from 'enzyme';
import { TestableTodo } from '../../components/Content/Todo';

describe('Todo Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionToggleTodo: jest.fn(),
            completed: true,
            text: 'mockText',
            id: 1,
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableTodo {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
})