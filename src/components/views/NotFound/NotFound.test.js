import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

test('should render landing page successfully', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper.find('h1').length).toBe(1);
});
