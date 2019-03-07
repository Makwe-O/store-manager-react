import React from 'react';
import { shallow } from 'enzyme';
import HeaderContent from './HeaderContent';

test('should render landing page successfully', () => {
  const wrapper = shallow(<HeaderContent />);
  expect(wrapper).toMatchSnapshot();
});
