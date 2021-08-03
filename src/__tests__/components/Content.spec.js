import React from 'react';
import { shallow } from 'enzyme';
import { TestableContent } from '../../components/Content/Content';

describe('Content Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetView: jest.fn(),
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableContent />);
        expect(renderedModule).toMatchSnapshot();
    });
})