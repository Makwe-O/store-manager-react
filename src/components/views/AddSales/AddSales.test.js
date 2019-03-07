import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddSales, mapStateToProps, mapDispatchToProps } from './AddSales';

const props = {
  role: 'Attendant',
  user_id: 2,
  getProducts: () => {},
  products: [
    {
      product_id: 154,
      product_image:
        'https://res.cloudinary.com/dnavbc7ny/image/upload/v1551942760/Store%20Manager/shoe12_sasxwk.png',
      product_name: 'Nike turbo ',
      price: 30000,
      category_name: 'adidas',
      quantity: 40
    }
  ],
  message: '',
  auth: {},
  history: {
    push: () => {}
  }
};

const props2 = {
  role: 'Admin',
  user_id: 2,
  getProducts: () => {},
  products: [
    {
      product_id: 154,
      product_image:
        'https://res.cloudinary.com/dnavbc7ny/image/upload/v1551942760/Store%20Manager/shoe12_sasxwk.png',
      product_name: 'Nike turbo ',
      price: 30000,
      category_name: 'adidas',
      quantity: 40
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
  user_id: 2,
  getProducts: () => {},
  products: [
    {
      product_id: 154,
      product_image:
        'https://res.cloudinary.com/dnavbc7ny/image/upload/v1551942760/Store%20Manager/shoe12_sasxwk.png',
      product_name: 'Nike turbo ',
      price: 30000,
      category_name: 'adidas',
      quantity: 40
    }
  ],
  message: '',
  auth: {},
  history: {
    push: () => {}
  }
};
const props4 = {
  role: 'Attendant',
  user_id: 2,
  getProducts: () => {},
  products: [
    {
      product_id: 154,
      product_image:
        'https://res.cloudinary.com/dnavbc7ny/image/upload/v1551942760/Store%20Manager/shoe12_sasxwk.png',
      product_name: 'Nike turbo ',
      price: 30000,
      category_name: 'adidas',
      quantity: 40
    }
  ],
  message: 'sup',
  auth: {},
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<AddSales {...props} />);
const wrapper2 = shallow(<AddSales {...props2} />);
const wrapper3 = shallow(<AddSales {...props3} />);
const wrapper4 = shallow(<AddSales {...props4} />);
describe('Sales Component Test', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render admin component when role is admin', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should render home component when role is empty', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render home component when message is  notempty', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('should simulate handling a product change', () => {
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
  it('should simulate handling a amount change', () => {
    const onChange = jest.fn();
    let preventDefault = jest.fn();
    wrapper.setProps({ onProductChange: onChange });
    wrapper.find('#amount').simulate('change', {
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
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
      loginReducer: { role: 'Attendant', user_id: 2 },
      productsReducer: { products: [] },
      salesRecordsReducer: { message: '' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({
      role: 'Attendant',
      user_id: 2,
      products: [],
      message: ''
    });
  });
});
