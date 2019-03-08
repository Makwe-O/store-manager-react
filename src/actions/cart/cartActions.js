export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE';
export const ADD_CART_RESET = 'ADD_CART_RESET';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';
export const RESET_CART = 'RESET_CART';

export const addCartReset = () => ({
  type: ADD_CART_RESET,
  payload: {
    message: ''
  }
});

export const addCart = ({ name, image, price }) => async dispatch => {
  let products = [];
  const getItems = localStorage.getItem('cart');
  if (getItems !== null) {
    products = JSON.parse(getItems);
  }
  const check = products.some(product => product.name === name);
  if (check) {
    dispatch({
      type: ADD_CART_FAILURE,
      payload: { message: 'Product Already Added' }
    });
    setTimeout(() => {
      dispatch({
        type: ADD_CART_RESET,
        payload: {
          message: ''
        }
      });
    }, 3000);
  }

  products.push({
    name,
    image,
    price
  });

  localStorage.setItem('cart', JSON.stringify(products));
  dispatch({
    type: ADD_CART_SUCCESS,
    payload: { products, message: 'Product Added' }
  });
  setTimeout(() => {
    dispatch({
      type: ADD_CART_RESET,
      payload: {
        message: ''
      }
    });
  }, 3000);
};

export const getCart = () => async dispatch => {
  try {
    dispatch({
      type: GET_CART_SUCCESS,
      payload: products
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAILURE,
      payload: []
    });
  }
};

export const clearCart = () => async dispatch => {
  dispatch({
    type: RESET_CART,
    payload: []
  });
};
