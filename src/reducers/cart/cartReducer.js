let products = [];
const getItems = localStorage.getItem('cart');
if (getItems !== null) {
  products = JSON.parse(getItems);
}

const initialState = {
  products,
  message: ''
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CART_SUCCESS':
      return { ...state, ...payload };
    case 'ADD_CART_RESET':
      return { ...state, ...payload };
    case 'ADD_CART_FAILURE':
      return { ...state, ...payload };
    case 'GET_CART_SUCCESS':
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default cartReducer;
