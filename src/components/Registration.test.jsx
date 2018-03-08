import React from 'react';
import { shallow } from 'enzyme';
import Registration from './Registration';

const wrapper = (props = {}) => shallow(<Registration {...props} />);

it('should match snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});
