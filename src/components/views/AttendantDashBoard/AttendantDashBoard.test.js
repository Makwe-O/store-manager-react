import React from 'react';
import { shallow } from 'enzyme';
import {
  AttendantDashBoard,
  mapStateToProps,
  mapDispatchToProps
} from './AttendantDashBoard';

const props = {
  role: 'Attendant',
  message: '',
  getProducts: () => {},
  addCart: () => {},
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
  cartProducts: [
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
  addCart: () => {},
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
  cartProducts: [
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
  getProducts: () => {},
  addCart: () => {},
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
  cartProducts: [
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
  message: '',
  getProducts: () => {},
  addCart: () => {},
  products: [],
  cartProducts: [
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

const props5 = {
  role: 'Attendant',
  message: 'message',
  getProducts: () => {},
  addCart: () => {},
  products: [],
  cartProducts: [
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

const wrapper = shallow(<AttendantDashBoard {...props} />);
const wrapper2 = shallow(<AttendantDashBoard {...props2} />);
const wrapper3 = shallow(<AttendantDashBoard {...props3} />);
const wrapper4 = shallow(<AttendantDashBoard {...props4} />);
const wrapper5 = shallow(<AttendantDashBoard {...props5} />);
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
  it('should render  display message if one exists', () => {
    expect(wrapper5).toMatchSnapshot();
  });
});
