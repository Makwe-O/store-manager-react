import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Menu,
  Segment,
  Sidebar,
  Container,
  Form,
  Message
} from 'semantic-ui-react';
import ConnectedSidebarNav from '../SidebarNav/SidebarNav';
import * as signUpActions from '../../../actions/signUp/signUpAction';
import HeaderContent from '../HeaderContent/HeaderContent';

export class AddAttendant extends Component {
  state = {
    name: '',
    email: '',
    role: 'Attendant',
    password: '',
    isLoading: false,
    visible: false
  };

  async componentDidMount() {
    this.checkRoleAdmin();
  }

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  onAttendantNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    const { name, email, role, password } = this.state;
    const { signUpAction, history } = this.props;
    await signUpAction(name, email, role, password, history);
    this.setState({
      isLoading: false
    });
  };

  checkRoleAdmin() {
    const { role, history } = this.props;
    if (!role) {
      return history.push('/');
    }
    if (role === 'Attendant') {
      return history.push('/attendant');
    }
  }

  render() {
    const { role, message } = this.props;
    const { visible, isLoading } = this.state;

    return (
      <>
        <div className="full-height">
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width="thin"
            >
              <ConnectedSidebarNav navOption={role} />
            </Sidebar>

            <Container>
              <Sidebar.Pusher>
                <HeaderContent />

                <Button
                  primary
                  disabled={visible}
                  onClick={this.handleShowClick}
                >
                  SideBar
                </Button>
                <Segment basic>
                  <Header as="h2">Add Attendant</Header>

                  <Form onSubmit={this.handleSubmit} id="submit">
                    {message.length !== 0 ? (
                      <Message info content={message} />
                    ) : null}

                    <Form.Field>
                      <label>Attendant Name</label>
                      <input
                        placeholder="Attendant Name"
                        id="name"
                        type="text"
                        required
                        onChange={this.onAttendantNameChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Email</label>
                      <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        required
                        onChange={this.onEmailChange}
                      />
                    </Form.Field>

                    <Form.Field>
                      <label>Password</label>
                      <input
                        placeholder="Password"
                        id="password"
                        type="text"
                        required
                        onChange={this.onPasswordChange}
                      />
                    </Form.Field>

                    {isLoading === false ? (
                      <Button type="submit" color="blue" id="loginButton">
                        Create
                      </Button>
                    ) : (
                      <Button loading color="blue">
                        Creating
                      </Button>
                    )}
                  </Form>
                </Segment>
              </Sidebar.Pusher>
            </Container>
          </Sidebar.Pushable>
        </div>
      </>
    );
  }
}

export const mapStateToProps = state => {
  const {
    loginReducer: { role },
    signUpReducer: { message }
  } = state;

  return {
    role,
    message
  };
};
export const mapDispatchToProps = {
  signUpAction: signUpActions.signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAttendant);
