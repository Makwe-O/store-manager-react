import React from 'react';
import { Header, Button, Modal, Form } from 'semantic-ui-react';
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
          <Form>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <Button type="submit" color="blue">
              Submit
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default Login;
