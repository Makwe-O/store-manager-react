import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

describe('Render ForgotPasswordForm ', () => {
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
