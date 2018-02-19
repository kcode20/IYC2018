import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navigation';

const wrapper = (props = {}) => shallow(<Navbar {...props} />);

it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
