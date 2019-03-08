import React from 'react';
import { shallow } from 'enzyme';
import VerticalCard from './VerticalCard';

const wrapper = shallow(<VerticalCard />);

describe('Render ForgotPasswordForm ', () => {
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
