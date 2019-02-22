import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
  Dimmer,
  Loader,
  Grid
} from 'semantic-ui-react';
import SidebarNav from '../SIdebarNav/SidebarNav';
import * as productsActions from '../../../actions/products/productsAction';
import VerticalCard from '../VerticalCard/VerticalCard';

class AttendantDashBoard extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  async componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    const { products } = this.props;
    console.log(products);
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
                    <Segment style={{ height: '50vh' }}>
                      <Dimmer active inverted>
                        <Loader size="massive">
                          Getting things Ready <span role="img">👍</span>
                        </Loader>
                      </Dimmer>

                      <Image src="/images/wireframe/paragraph.png" />
                    </Segment>
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
    productsReducer: { products }
  } = state;

  return {
    products
  };
};
const mapDispatchToProps = {
  getProducts: productsActions.getProducts
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendantDashBoard);
