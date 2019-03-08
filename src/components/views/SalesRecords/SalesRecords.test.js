import React from 'react';
import { shallow } from 'enzyme';
import { getSalesRecords } from '../../../actions/salesRecords/salesRecordsAction';
import {
  SalesRecords,
  mapStateToProps,
  mapDispatchToProps
} from './SalesRecords';

const props = {
  role: 'Admin',
  getSalesRecords: () => {},
  sales_record: [
    {
      sales_record_id: 13,
      name: 'Mmakwe',
      product_name: 'Swoosh slides',
      price: 30000,
      sales_amount: 300,
      date: '2019-03-07T08:22:17.572Z'
    }
  ],
  history: {
    push: () => {}
  }
};
const props2 = {
  role: '',
  getSalesRecords: () => {},
  sales_record: [
    {
      sales_record_id: 13,
      name: 'Mmakwe',
      product_name: 'Swoosh slides',
      price: 30000,
      sales_amount: 300,
      date: '2019-03-07T08:22:17.572Z'
    }
  ],
  history: {
    push: () => {}
  }
};
const props3 = {
  role: 'Attendant',
  getSalesRecords: () => {},
  sales_record: [
    {
      sales_record_id: 13,
      name: 'Mmakwe',
      product_name: 'Swoosh slides',
      price: 30000,
      sales_amount: 300,
      date: '2019-03-07T08:22:17.572Z'
    }
  ],
  history: {
    push: () => {}
  }
};
const props4 = {
  role: 'Admin',
  getSalesRecords: () => {},
  sales_record: [],
  history: {
    push: () => {}
  }
};

const wrapper = shallow(<SalesRecords {...props} />);
const wrapper2 = shallow(<SalesRecords {...props2} />);
const wrapper3 = shallow(<SalesRecords {...props3} />);
const wrapper4 = shallow(<SalesRecords {...props4} />);

const handleLogout = e => jest.fn();

describe('Sales Records Component Test', () => {
  it('should render  component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should redirect home page if no role is present', () => {
    expect(wrapper2).toMatchSnapshot();
  });
  it('should redirect attendant page if role is attendant', () => {
    expect(wrapper3).toMatchSnapshot();
  });
  it('should render loading screen', () => {
    expect(wrapper4).toMatchSnapshot();
  });

  it('mapStateToProps should return the right value', () => {
    const mockedState = {
      salesRecordsReducer: { sales_record: [] },
      loginReducer: { role: 'Admin' }
    };
    const state = mapStateToProps(mockedState);
    expect(state).toEqual({ sales_record: [], role: 'Admin' });
  });
});
