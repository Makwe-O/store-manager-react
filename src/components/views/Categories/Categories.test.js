import React from 'react';
import { shallow } from 'enzyme';
import { Categories, mapStateToProps, mapDispatchToProps } from './Categories';

const props = {
  role: 'Admin',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  history: {
    push: () => {}
  }
};
const props2 = {
  role: '',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  history: {
    push: () => {}
  }
};
const props3 = {
  role: 'Attendant',
  getCategories: () => {},
  categories: [
    {
      category_id: 1,
      category_name: 'uncategorized'
    }
  ],
  history: {
    push: () => {}
  }
};
const props4 = {
  role: 'Admin',
  getCategories: () => {},
  categories: [],
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<Categories {...props} />);
const wrapper2 = shallow(<Categories {...props2} />);
const wrapper3 = shallow(<Categories {...props3} />);
const wrapper4 = shallow(<Categories {...props4} />);

describe('Categories Component Test', () => {
  it('should render  component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should redirect to home page if no role is present', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should redirect to Attendant page if no role is attendant', () => {
    expect(wrapper3).toMatchSnapshot();
  });

  it('should return response when categories is empty', () => {
    expect(wrapper4).toMatchSnapshot();
  });
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
      categoriesReducer: { categories: [] },
      loginReducer: { role: 'Admin' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({ categories: [], role: 'Admin' });
  });
});
