import React from 'react';
import { shallow } from 'enzyme';
import Paginate from './Paginate';

const props = {
  productCount: 10,
  pageSize: 2,
  currentPage: 1,
  onPageChange: () => {}
};
const props2 = {
  productCount: 10,
  pageSize: 1,
  currentPage: 1,
  onPageChange: () => {}
};

test('should render landing page successfully', () => {
  const wrapper = shallow(<Paginate {...props} />);
  expect(wrapper).toMatchSnapshot();
});
test('should render landing page successfully', () => {
  const wrapper2 = shallow(<Paginate {...props2} />);
  expect(wrapper2).toMatchSnapshot();
});
