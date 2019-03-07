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
  Icon,
  List
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
                        <Loader size="massive">
                          Getting your categories 👍
                        </Loader>
                      </Dimmer>

                      <Image src="/images/wireframe/paragraph.png" />
                    </Segment>
                  ) : (
                    <List animated size="massive">
                      {categories.map(category => (
                        <List.Item key={category.category_id}>
                          {category.category_name}
                        </List.Item>
                      ))}
                    </List>
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
