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
import * as productsActions from '../../../actions/products/productsAction';
import * as categoriesActions from '../../../actions/categories/categoriesAction';
import HeaderContent from '../HeaderContent/HeaderContent';

export class AddProduct extends Component {
  state = {
    visible: false,
    product_name: '',
    price: '',
    quantity: '',
    category_id: 1,
    product_image: '',
    isLoading: false
  };

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

  onProductNameChange = e => {
    this.setState({ product_name: e.target.value });
  };

  onPriceChange = e => {
    const price = parseInt(e.target.value);
    this.setState({ price });
  };

  onQuantityChange = e => {
    const quantity = parseInt(e.target.value);
    this.setState({ quantity });
  };

  onCategoryChange = e => {
    const category_id = parseInt(e.target.value);
    this.setState({
      category_id
    });
  };

  onImageUpload = async e => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'kuvlmpwr');

    const upload = await axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/dnavbc7ny/image/upload',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });
    await this.setState({
      product_image: upload.data.secure_url
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    const {
      product_name,
      price,
      quantity,
      category_id,
      product_image
    } = this.state;
    const { addProducts, history } = this.props;
    await addProducts(
      product_name,
      price,
      quantity,
      category_id,
      product_image,
      history
    );
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
    const { role, categories, message } = this.props;
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
                  sidebar
                </Button>
                <Segment basic>
                  <Header as="h2">Add Product</Header>

                  <Form onSubmit={this.handleSubmit} id="submit">
                    {message.length !== 0 ? (
                      <Message info content={message} />
                    ) : null}
                    <Form.Field>
                      <label>Product Name</label>
                      <input
                        placeholder="Product Name"
                        id="product"
                        type="text"
                        required
                        onChange={this.onProductNameChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Price</label>
                      <input
                        placeholder="Price"
                        id="price"
                        type="number"
                        required
                        onChange={this.onPriceChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Quantity</label>
                      <input
                        placeholder="Quantity"
                        id="quantity"
                        type="number"
                        required
                        onChange={this.onQuantityChange}
                      />
                    </Form.Field>

                    <Form.Field>
                      <label>Category</label>
                      <select onChange={this.onCategoryChange} id="category">
                        {categories.map(category => (
                          <option
                            value={category.category_id}
                            key={category.category_id}
                          >
                            {category.category_name}
                          </option>
                        ))}
                      </select>
                    </Form.Field>

                    <Form.Field>
                      <input
                        placeholder="Upload Image"
                        id="image"
                        type="file"
                        required
                        onChange={this.onImageUpload}
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
    categoriesReducer: { categories },
    productsReducer: { message }
  } = state;

  return {
    role,
    categories,
    message
  };
};
export const mapDispatchToProps = {
  addProducts: productsActions.addProducts,
  getCategories: categoriesActions.getCategories
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
