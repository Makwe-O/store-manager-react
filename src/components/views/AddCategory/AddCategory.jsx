import React, { Component } from 'react';
import axios from 'axios';
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
import * as categoriesActions from '../../../actions/categories/categoriesAction';
import HeaderContent from '../HeaderContent/HeaderContent';

export class AddCategory extends Component {
  state = {
    category_name: '',
    isLoading: false,
    visible: false
  };

  async componentDidMount() {
    this.checkRoleAdmin();
  }

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  onCategoryNameChange = e => {
    this.setState({ category_name: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    const { category_name } = this.state;
    const { addCategories } = this.props;
    await addCategories(category_name);
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
                <Button disabled={visible} onClick={this.handleShowClick}>
                  Show sidebar
                </Button>
                <Segment basic>
                  <Header as="h2">Add Category</Header>

                  <Form onSubmit={this.handleSubmit} id="submit">
                    {message.length !== 0 ? (
                      <Message info content={message} />
                    ) : null}

                    <Form.Field>
                      <label>Category Name</label>
                      <input
                        placeholder="Category Name"
                        id="category"
                        type="text"
                        required
                        onChange={this.onCategoryNameChange}
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
    categoriesReducer: { message }
  } = state;

  return {
    role,
    message
  };
};
export const mapDispatchToProps = {
  addCategories: categoriesActions.addCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategory);
