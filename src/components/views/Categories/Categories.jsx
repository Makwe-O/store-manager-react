import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Menu,
  Segment,
  Sidebar,
  Container,
  Dimmer,
  Loader,
  Image,
  Table,
  Icon
} from 'semantic-ui-react';
import SidebarNav from '../SidebarNav/SidebarNav';
import * as categoriesActions from '../../../actions/categories/categoriesAction';

class Categories extends Component {
  state = { visible: false };

  async componentWillMount() {
    this.checkRoleAdmin();
  }

  async componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

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
    const { role } = this.props;
    const { categories } = this.props;
    console.log(this.props);
    const { visible } = this.state;
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
              <SidebarNav navOption={role} />
            </Sidebar>

            <Container>
              <Sidebar.Pusher>
                <Button disabled={visible} onClick={this.handleShowClick}>
                  Show sidebar
                </Button>
                <Segment basic>
                  <Header as="h2">DashBoard</Header>
                  {categories.length === 0 ? (
                    <Segment style={{ height: '50vh' }}>
                      <Dimmer active inverted>
                        <Loader size="massive">Getting things Ready 👍</Loader>
                      </Dimmer>

                      <Image src="/images/wireframe/paragraph.png" />
                    </Segment>
                  ) : (
                    <Table celled padded>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell singleLine>Name</Table.HeaderCell>

                          <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {categories.map(category => (
                          <Table.Row key={category.category_id}>
                            <Table.Cell>
                              <Header as="h2">{category.category_name}</Header>
                            </Table.Cell>

                            <Table.Cell>
                              <Button.Group size="large">
                                <Button animated positive>
                                  <Button.Content visible>Edit</Button.Content>
                                  <Button.Content hidden>
                                    <Icon name="pencil right" />
                                  </Button.Content>
                                </Button>
                                <Button.Or />
                                <Button animated negative>
                                  <Button.Content visible>
                                    Delete
                                  </Button.Content>
                                  <Button.Content hidden>
                                    <Icon name="trash alternate outline left " />
                                  </Button.Content>
                                </Button>
                              </Button.Group>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  )}
                </Segment>
              </Sidebar.Pusher>
            </Container>
          </Sidebar.Pushable>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  const {
    categoriesReducer: { categories },
    loginReducer: { role }
  } = state;
  return {
    categories,
    role
  };
};

const mapDispatchToProps = {
  getCategories: categoriesActions.getCategories
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
