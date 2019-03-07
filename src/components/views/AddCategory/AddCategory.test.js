import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  AddCategory,
  mapStateToProps,
  mapDispatchToProps
} from './AddCategory';

const props = {
  role: 'Admin',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: '',
  history: {
    push: () => {}
  }
};
const props2 = {
  role: 'Attendant',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: '',
  history: {
    push: () => {}
  }
};

const props3 = {
  role: '',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: '',
  history: {
    push: () => {}
  }
};
const props4 = {
  role: 'Admin',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: 'Category Created',
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<AddCategory {...props} />);
const wrapper2 = shallow(<AddCategory {...props2} />);
const wrapper3 = shallow(<AddCategory {...props3} />);
const wrapper4 = shallow(<AddCategory {...props4} />);

describe('Add Categories Component Test', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render attendant component when role is attendant', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should render home component when role is empty', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render home component when message is  not empty', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('should simulate handling a category name change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#category').simulate('change', {
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
      categoriesReducer: { message: '' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({
      role: 'Admin',
      message: ''
    });
  });
});
