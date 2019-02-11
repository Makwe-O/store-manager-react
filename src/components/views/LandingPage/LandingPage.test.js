import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

test('should render landing page successfully', () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper).toMatchSnapshot();
});
