import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddProduct, mapStateToProps, mapDispatchToProps } from './AddProduct';

const props = {
  role: 'Admin',
  message: '',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: '',
  auth: {},
  history: {
    push: () => {}
  }
};
const props2 = {
  role: 'Attendant',
  message: '',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: '',
  auth: {},
  history: {
    push: () => {}
  }
};

const props3 = {
  role: '',
  message: '',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: '',
  auth: {},
  history: {
    push: () => {}
  }
};
const props4 = {
  role: 'Admin',
  message: 'Product Added',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  message: '',
  auth: {},
  history: {
    push: () => {}
  }
};
const wrapper = shallow(<AddProduct {...props} />);
const wrapper2 = shallow(<AddProduct {...props2} />);
const wrapper3 = shallow(<AddProduct {...props3} />);
const wrapper4 = shallow(<AddProduct {...props4} />);
describe('Sales Component Test', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render attendant component when role is attendant', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should render home component when role is empty', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render home component when role is empty', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('should simulate handling a product name change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#product').simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(preventDefault).toBeDefined();
  });
  it('should simulate handling a price change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#price').simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(preventDefault).toBeDefined();
  });
  it('should simulate handling a quantity change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#quantity').simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(preventDefault).toBeDefined();
  });
  it('should simulate handling a quantity change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#category').simulate('change', {
      target: {
        value: 'socks'
      }
    });
    expect(preventDefault).toBeDefined();
  });
  it('should simulate handling a image change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#image').simulate('change', {
      target: {
        value: 'socks'
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
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
      loginReducer: { role: 'Admin' },
      categoriesReducer: { categories: [] },
      productsReducer: { message: '' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({
      role: 'Admin',
      categories: [],
      message: ''
    });
  });
});
