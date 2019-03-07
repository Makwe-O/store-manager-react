import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

const wrapper = shallow(<Login />);

describe('Render ForgotPasswordForm ', () => {
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
