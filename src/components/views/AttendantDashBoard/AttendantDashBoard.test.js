import React from 'react';
import { shallow } from 'enzyme';
import {
  AttendantDashBoard,
  mapStateToProps,
  mapDispatchToProps
} from './AttendantDashBoard';

const props = {
  role: 'Attendant',
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
const props2 = {
  role: '',
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
  role: 'Admin',
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
  role: 'Attendant',
  getProducts: () => {},
  products: [],
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<AttendantDashBoard {...props} />);
const wrapper2 = shallow(<AttendantDashBoard {...props2} />);
const wrapper3 = shallow(<AttendantDashBoard {...props3} />);
const wrapper4 = shallow(<AttendantDashBoard {...props4} />);
describe('Attendant Rcords Component Test', () => {
  it('should render  component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render home page is no role is present', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should render admin page is no role is admin', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render  page is no products is empty', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
      productsReducer: { products: [] },
      loginReducer: { role: 'Admin' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({ products: [], role: 'Admin' });
  });
});
