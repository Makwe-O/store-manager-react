import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import LoginForm from '../LoginForm/LoginForm';

const Login = props => {
  const { size } = props;
  return (
    <Modal
      trigger={
        <Button color="blue" size={size}>
          Login
        </Button>
      }
    >
      <Modal.Header>Sign In To Store Manager</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <LoginForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default Login;
