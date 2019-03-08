import React from 'react';
import { shallow } from 'enzyme';
import { Cart, mapStateToProps, mapDispatchToProps } from './Cart';

const props = {
  role: 'Attendant',
  message: '',
  getCart: () => {},
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
  history: {
    push: () => {}
  }
};

const props2 = {
  role: '',
  message: '',
  getCart: () => {},
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
  history: {
    push: () => {}
  }
};

const props3 = {
  role: 'Admin',
  message: '',
  getCart: () => {},
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
  history: {
    push: () => {}
  }
};

const props4 = {
  role: 'Admin',
  message: '',
  getCart: () => {},
  products: [],
  history: {
    push: () => {}
  }
};
const props5 = {
  role: 'Attendant',
  message: 'Message',
  getCart: () => {},
  products: [],
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<Cart {...props} />);
const wrapper2 = shallow(<Cart {...props2} />);
const wrapper3 = shallow(<Cart {...props3} />);
const wrapper4 = shallow(<Cart {...props4} />);
const wrapper5 = shallow(<Cart {...props5} />);

describe('Cart Component Test', () => {
  it('should render  component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render home component when role empty', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should render admin component when role is admin', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render admin component when role is admin', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('should render admin component when message is present', () => {
    expect(wrapper4).toMatchSnapshot();
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
      cartReducer: { products: [] },
      loginReducer: { role: 'Attendant' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({ products: [], role: 'Attendant' });
  });
});
