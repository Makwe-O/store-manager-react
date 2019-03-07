import React from 'react';
import { shallow } from 'enzyme';
import VerticalCardLoader from './VerticalCardLoader';

const wrapper = shallow(<VerticalCardLoader />);

describe('Render ForgotPasswordForm ', () => {
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
