import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
  Table,
  Dimmer,
  Loader,
  Message
} from 'semantic-ui-react';
import ConnectedSidebarNav from '../SidebarNav/SidebarNav';
import * as productsActions from '../../../actions/products/productsAction';
import HeaderContent from '../HeaderContent/HeaderContent';
import Paginate from '../../common/Paginate';
import paginate from '../../../utils/paginate/paginate';

export class AdminDashBoard extends Component {
  state = {
    visible: false,
    open: false,
    isLoading: true,
    pageSize: 4,
    currentPage: 1
  };

  async componentWillMount() {
    this.checkRoleAdmin();
  }

  async componentDidMount() {
    const { getProducts } = this.props;
    await getProducts();
    await this.setState({ isLoading: false });
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
  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { products, role, deleteProducts, message } = this.props;
    const { visible, isLoading, pageSize, currentPage } = this.state;
    const paginatedProducts = paginate(products, currentPage, pageSize);

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
                <div className="navStyle">
                  <Button disabled={visible} onClick={this.handleShowClick}>
                    sidebar
                  </Button>

                  <Link to="/addproduct">
                    <Button color="blue">Add Product </Button>
                  </Link>
                </div>
                <Segment basic>
                  <Header as="h2">DashBoard</Header>
                  {message.length !== 0 ? (
                    <Message info content={message} />
                  ) : null}
                  {isLoading ? (
                    <Segment
                      className="segment-style"
                      style={{ height: '50vh' }}
                    >
                      <Dimmer active inverted>
                        <Loader size="massive">Getting things Ready 👍</Loader>
                      </Dimmer>

                      <Image src="/images/wireframe/paragraph.png" />
                    </Segment>
                  ) : products.length === 0 ? (
                    <h2>There are no products in the store</h2>
                  ) : (
                    <>
                      <Table celled padded>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                            <Table.HeaderCell>Image</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>

                        <Table.Body>
                          {paginatedProducts.map(product => (
                            <Table.Row key={product.product_id}>
                              <Table.Cell>
                                <Header as="h2">{product.product_name}</Header>
                              </Table.Cell>
                              <Table.Cell textAlign="center">
                                <Image
                                  src={product.product_image}
                                  size="small"
                                />
                              </Table.Cell>
                              <Table.Cell>{product.price}</Table.Cell>
                              <Table.Cell>{product.quantity}</Table.Cell>
                              <Table.Cell>{product.category_name}</Table.Cell>
                              <Table.Cell>
                                <Button.Group size="large">
                                  <Button animated negative>
                                    <Button.Content visible>
                                      Delete
                                    </Button.Content>

                                    <Button.Content
                                      hidden
                                      onClick={() =>
                                        deleteProducts(product.product_id)
                                      }
                                    >
                                      <Icon name="trash alternate outline left " />
                                    </Button.Content>
                                  </Button>
                                </Button.Group>
                              </Table.Cell>
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table>
                      <Paginate
                        productCount={products.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                      />
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
    productsReducer: { products, message },
    loginReducer: { role }
  } = state;

  return {
    products,
    role,
    message
  };
};
export const mapDispatchToProps = {
  getProducts: productsActions.getProducts,
  deleteProducts: productsActions.deleteProducts
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashBoard);
