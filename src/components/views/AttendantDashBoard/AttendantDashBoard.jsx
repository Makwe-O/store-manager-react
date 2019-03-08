import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Menu,
  Segment,
  Sidebar,
  Container,
  Grid
} from 'semantic-ui-react';
import ConnectedSidebarNav from '../SidebarNav/SidebarNav.jsx';
import * as productsActions from '../../../actions/products/productsAction';
import * as cartActions from '../../../actions/cart/cartActions';
import VerticalCard from '../VerticalCard/VerticalCard';
import VerticalCardLoader from '../VerticalCard/VerticalCardLoader';
import Paginate from '../../common/Paginate';
import paginate from '../../../utils/paginate/paginate';
import HeaderContent from '../HeaderContent/HeaderContent';

export class AttendantDashBoard extends Component {
  state = { visible: false, pageSize: 8, currentPage: 1 };

  async componentDidMount() {
    this.checkRoleAttendant();
    const { getProducts } = this.props;
    getProducts();
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
  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { products } = this.props;
    const { visible, pageSize, currentPage } = this.state;
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
              <ConnectedSidebarNav />
            </Sidebar>

            <Container>
              <Sidebar.Pusher>
                <HeaderContent />
                <Button disabled={visible} onClick={this.handleShowClick}>
                  sidebar
                </Button>
                <Segment basic>
                  <Header as="h2">DashBoard</Header>
                  {products.length === 0 ? (
                    <>
                      <Grid>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                          <VerticalCardLoader />
                        </Grid.Column>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid>
                        {paginatedProducts.map(product => (
                          <Grid.Column
                            mobile={16}
                            tablet={8}
                            computer={4}
                            key={product.product_id}
                          >
                            <VerticalCard
                              name={product.product_name}
                              image={product.product_image}
                              price={product.price}
                              quantity={product.quantity}
                              category={product.category_name}
                              addCart={this.props.addCart}
                            />
                          </Grid.Column>
                        ))}
                      </Grid>
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
    productsReducer: { products },
    loginReducer: { role }
  } = state;

  return {
    products,
    role
  };
};
export const mapDispatchToProps = {
  getProducts: productsActions.getProducts,
  addCart: cartActions.addCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendantDashBoard);
