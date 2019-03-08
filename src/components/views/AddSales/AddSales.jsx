import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Menu,
  Segment,
  Sidebar,
  Container,
  Message,
  Form
} from 'semantic-ui-react';
import SidebarNav from '../SidebarNav/SidebarNav';
import * as salesRecordsActions from '../../../actions/salesRecords/salesRecordsAction';
import * as productsActions from '../../../actions/products/productsAction';
import HeaderContent from '../HeaderContent/HeaderContent';

export class AddSales extends Component {
  state = {
    visible: false,
    user_id: this.props.user_id,
    product_id: '',
    sales_amount: '',
    isLoading: false
  };

  async componentDidMount() {
    this.checkRoleAttendant();
    const { getProducts } = this.props;
    getProducts();
  }

  checkRoleAttendant() {
    const { role, history } = this.props;
    if (!role) {
      return history.push('/');
    }
    if (role === 'Admin') {
      return history.push('/admin');
    }
  }

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  onProductChange = e => {
    const product_id = parseInt(e.target.value);
    this.setState({ product_id });
  };

  onSalesAmountChange = e => {
    const sales_amount = parseInt(e.target.value);
    this.setState({ sales_amount });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    const { user_id, product_id, sales_amount } = this.state;
    const { addSalesRecord } = this.props;
    await addSalesRecord(user_id, product_id, sales_amount);
    this.setState({
      isLoading: false
    });
  };

  render() {
    const { role, products, message } = this.props;
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
              <SidebarNav navOption={role} />
            </Sidebar>

            <Container>
              <Sidebar.Pusher>
                <HeaderContent />
                <Button disabled={visible} onClick={this.handleShowClick}>
                  sidebar
                </Button>
                <Segment basic>
                  <Header as="h2">Add Sale Record</Header>

                  <Form onSubmit={this.handleSubmit} id="submit">
                    {message.length !== 0 ? (
                      <Message info content={message} />
                    ) : null}

                    <Form.Field>
                      <label>Product</label>
                      <select onChange={this.onProductChange} id="product">
                        {products.map(product => (
                          <option
                            value={product.product_id}
                            key={product.product_id}
                          >
                            {product.product_name}
                          </option>
                        ))}
                      </select>
                    </Form.Field>

                    <Form.Field>
                      <label>Amount</label>
                      <input
                        placeholder="Amount"
                        id="amount"
                        type="number"
                        required
                        onChange={this.onSalesAmountChange}
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
    loginReducer: { role, user_id },
    productsReducer: { products },
    salesRecordsReducer: { message }
  } = state;

  return {
    role,
    user_id,
    products,
    message
  };
};
export const mapDispatchToProps = {
  getProducts: productsActions.getProducts,
  addSalesRecord: salesRecordsActions.addSalesRecord
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSales);
