import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { loginLocal } from '../../../actions/login/loginAction';

const props = {
  role: 'Admin',
  message: '',
  auth: {},
  history: {
    push: () => {}
  },
  loginLocal: () => {}
};
const props2 = {
  role: 'Admin',
  message: 'message',
  auth: {},
  history: {
    push: () => {}
  },
  loginLocal: () => {}
};
const wrapper = shallow(<LoginForm {...props} />);
const wrapper2 = shallow(<LoginForm {...props2} />);

describe('Login Component Test', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render  message component', () => {
    expect(wrapper2).toMatchSnapshot();
  });

  it('should simulate handling a change email', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onEmailChange: onChange });
    wrapper.find('#email').simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(preventDefault).toBeDefined();
  });

  it('should simulate handling a change password', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onPasswordChange: onChange });
    wrapper.find('#password').simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(preventDefault).toBeDefined();
  });

  it('should simulate handling submit', () => {
    const onClick = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ handleSubmit: onClick });
    wrapper.find('#submit').simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});
