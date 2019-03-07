import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { loginLocal } from '../../../actions/login/loginAction';

export class LoginForm extends Component {
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
        {message.length !== 0 ? <Message info content={message} /> : null}
        <Form onSubmit={this.handleSubmit} id="submit">
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={this.onEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              id="password"
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
export const mapStateToProps = state => {
  const {
    auth,
    loginReducer: { message }
  } = state;
  return { auth, message };
};

export const mapDispatchToProps = dispatch => ({
  completeLoginLocal: (userInfo, history) =>
    dispatch(loginLocal(userInfo, history))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
