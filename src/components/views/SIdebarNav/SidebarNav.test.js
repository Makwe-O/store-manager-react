import React from 'react';
import { shallow, mount } from 'enzyme';

import { SidebarNav, mapStateToProps, mapDispatchToProps } from './SidebarNav';
const state = {
  articleReducer: {}
};
const props = {
  history: {
    push: () => {}
  },
  navOption: 'Admin',
  logout: () => {}
};

const props2 = {
  history: {
    push: () => {}
  },
  navOption: 'Attendant',
  logout: () => {}
};
const handleLogout = e => jest.fn();

const wrapper = shallow(<SidebarNav {...props} />);
const wrapper2 = shallow(<SidebarNav {...props2} />);
describe('Sidenav Component Test', () => {
  it('should render  component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render  component', () => {
    expect(wrapper2).toMatchSnapshot();
  });

  it('should simulate handling a menu click logout', () => {
    const onClick = jest.fn();
    wrapper.setProps({ handleLogout: onClick });
    wrapper.find('#logout').simulate('click');
    expect(onClick.mock.calls.length).toEqual(0);
  });
  it('should simulate handling a menu click logout', () => {
    const onClick = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ handleLogout: onClick });
    wrapper.find('#logout').simulate('click', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});
