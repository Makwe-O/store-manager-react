import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  AddAttendant,
  mapStateToProps,
  mapDispatchToProps
} from './AddAttendant';

const props = {
  role: 'Admin',
  message: '',
  history: {
    push: () => {}
  }
};
const props2 = {
  role: 'Attendant',

  message: '',
  history: {
    push: () => {}
  }
};

const props3 = {
  role: '',
  message: '',
  history: {
    push: () => {}
  }
};
const props4 = {
  role: 'Admin',
  message: 'User Created',
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<AddAttendant {...props} />);
const wrapper2 = shallow(<AddAttendant {...props2} />);
const wrapper3 = shallow(<AddAttendant {...props3} />);
const wrapper4 = shallow(<AddAttendant {...props4} />);

describe('Add Attendant Component Test', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render attendant component when role is attendant', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should render home component when role is empty', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render component when message is  not empty', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('should simulate handling a name change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#name').simulate('change', {
      target: {
        value: '2'
      }
    });
  });
  it('should simulate handling a name change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#email').simulate('change', {
      target: {
        value: '2'
      }
    });
  });
  it('should simulate handling a name change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#password').simulate('change', {
      target: {
        value: '2'
      }
    });
  });
  it('should simulate handling submit', () => {
    const onClick = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ handleSubmit: onClick });
    wrapper.find('#submit').simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
      loginReducer: { role: 'Admin' },
      signUpReducer: { message: '' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({
      role: 'Admin',
      message: ''
    });
  });
});
