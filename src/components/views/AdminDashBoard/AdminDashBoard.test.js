import React from 'react';
import { shallow } from 'enzyme';
import {
  AdminDashBoard,
  mapStateToProps,
  mapDispatchToProps
} from './AdminDashBoard';

const props = {
  role: 'Admin',
  message: '',
  getProducts: () => {},
  deleteProducts: () => {},
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
  history: {
    push: () => {}
  }
};

const props3 = {
  role: 'Attendant',
  message: '',
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
  history: {
    push: () => {}
  }
};

const props4 = {
  role: 'Admin',
  message: '',
  getProducts: () => {},
  products: [],
  history: {
    push: () => {}
  }
};

const props5 = {
  role: 'Admin',
  message: 'sup',
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
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<AdminDashBoard {...props} />);
const wrapper2 = shallow(<AdminDashBoard {...props2} />);
const wrapper3 = shallow(<AdminDashBoard {...props3} />);
const wrapper4 = shallow(<AdminDashBoard {...props4} />);
const wrapper5 = shallow(<AdminDashBoard {...props5} />);
describe('Admin Component Test', () => {
  it('should render  component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render home page is no role is present', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should render attendant page is no role is admin', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render page is no products is empty', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('should render page when message is present', () => {
    expect(wrapper5).toMatchSnapshot();
  });
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
      productsReducer: {
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
        message: ''
      },
      loginReducer: { role: 'Admin' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({
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
      role: 'Admin',
      message: ''
    });
  });
});
