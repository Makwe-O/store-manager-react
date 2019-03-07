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
import SidebarNav from '../SidebarNav/SidebarNav';
import * as productsActions from '../../../actions/products/productsAction';
import VerticalCard from '../VerticalCard/VerticalCard';
import VerticalCardLoader from '../VerticalCard/VerticalCardLoader';

class AttendantDashBoard extends Component {
  state = { visible: false };

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

  render() {
    const { products } = this.props;
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
              <SidebarNav />
            </Sidebar>

            <Container>
              <Sidebar.Pusher>
                <Button disabled={visible} onClick={this.handleShowClick}>
                  Show sidebar
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
                    <Grid>
                      {products.map(product => (
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
                          />
                        </Grid.Column>
                      ))}
                    </Grid>
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
    productsReducer: { products },
    loginReducer: { role }
  } = state;

  return {
    products,
    role
  };
};
const mapDispatchToProps = {
  getProducts: productsActions.getProducts
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendantDashBoard);
