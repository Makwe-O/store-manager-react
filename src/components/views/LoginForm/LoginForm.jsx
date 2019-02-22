import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import { loginLocal } from '../../../actions/login/loginAction';
import SuccessMessage from '../Message/SuccessMessage/SuccessMessage';
import ErrorMessage from '../Message/ErrorMessage/ErrorMessage';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false
  };

  onEmailChange = e => {
    const email = e.target.value;
    this.setState({
      email
    });
  };

  onPasswordChange = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    const { email, password } = this.state;
    const { completeLoginLocal, history } = this.props;
    await completeLoginLocal({ email, password }, history);
    this.setState({
      isLoading: false
    });
  };

  render() {
    const { message } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        {message === 'Could not login. Wrong Email or Password' ? (
          <ErrorMessage message={message} />
        ) : null}
        {message === 'login. Auth Successful' ? (
          <SuccessMessage message={message} />
        ) : null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={this.onEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              required
              onChange={this.onPasswordChange}
            />
          </Form.Field>
          {isLoading === false ? (
            <Button type="submit" color="blue" id="loginButton">
              Submit
            </Button>
          ) : (
            <Button loading color="blue">
              Loading
            </Button>
          )}
        </Form>
      </>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  message: state.loginReducer.message
});

const mapDispatchToProps = dispatch => ({
  completeLoginLocal: (userInfo, history) =>
    dispatch(loginLocal(userInfo, history))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
