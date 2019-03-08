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
  Form
} from 'semantic-ui-react';
import ConnectedSidebarNav from '../SidebarNav/SidebarNav.jsx';
import * as cartActions from '../../../actions/cart/cartActions';
import HeaderContent from '../HeaderContent/HeaderContent';

export class Cart extends Component {
  state = {
    isLoading: false,
    visible: false
  };

  async componentDidMount() {
    this.checkRoleAttendant();
    const { getCart } = this.props;
    getCart();
  }
  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  checkRoleAttendant() {
    const { role, history } = this.props;
    if (!role) {
      return history.push('/');
    }
    if (role === 'Admin') {
      return history.push('/admin');
    }
  }

  render() {
    const { products } = this.props;
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
              <ConnectedSidebarNav />
            </Sidebar>

            <Container>
              <Sidebar.Pusher>
                <HeaderContent />
                <Button disabled={visible} onClick={this.handleShowClick}>
                  sidebar
                </Button>
                <Segment basic>
                  <Header as="h2">Cart</Header>
                  {products.length === 0 ? (
                    <>
                      <Segment style={{ height: '50vh' }}>
                        <Dimmer active inverted>
                          <Loader size="massive">Getting your Cart 👍</Loader>
                        </Dimmer>

                        <Image src="/images/wireframe/paragraph.png" />
                      </Segment>
                    </>
                  ) : (
                    <>
                      <Form>
                        <Table celled padded>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell singleLine>
                                Name
                              </Table.HeaderCell>
                              <Table.HeaderCell>Image</Table.HeaderCell>
                              <Table.HeaderCell>Price</Table.HeaderCell>
                              <Table.HeaderCell>Quantity</Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>

                          <Table.Body>
                            {products.map(product => (
                              <Table.Row key={product.product_id}>
                                <Table.Cell>
                                  <Header as="h2">{product.name}</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                  <Image src={product.image} size="small" />
                                </Table.Cell>
                                <Table.Cell>{product.price}</Table.Cell>
                                <Table.Cell>
                                  <input
                                    type="number"
                                    placeholder="Enter Quantity"
                                    id="quantity"
                                    required
                                    onChange={this.onQuantityChange}
                                  />
                                </Table.Cell>
                              </Table.Row>
                            ))}
                          </Table.Body>
                        </Table>
                        {isLoading === false ? (
                          <Button type="submit" color="blue" id="loginButton">
                            CheckOut
                          </Button>
                        ) : (
                          <Button loading color="blue">
                            Loading
                          </Button>
                        )}
                      </Form>
                    </>
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

export const mapStateToProps = state => {
  const {
    cartReducer: { products },
    loginReducer: { role }
  } = state;

  return {
    products,
    role
  };
};
export const mapDispatchToProps = {
  getCart: cartActions.getCart,
  clearCart: cartActions.clearCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
