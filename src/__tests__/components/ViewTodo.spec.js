import React from 'react';
import { shallow } from 'enzyme';
import ViewTodo from '../../components/Content/ViewTodo';

describe('ViewTodo Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            id: 1,
            completed: true,
            text: 'mockText',
            onClick: jest.fn(),
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<ViewTodo {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
})