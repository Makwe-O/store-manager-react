const initialState = {
  products: [],
  message: ''
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, products: payload };
    case 'DELETE_PRODUCTS_SUCCESS':
      const newState = state.products.filter(
        product => payload.id !== product.product_id
      );
      return { ...state, products: newState, message: payload.message };
    case 'DELETE_PRODUCTS_RESET':
      return {
        ...state,
        message: payload.message
      };
    case 'ADD_PRODUCTS_SUCCESS':
      return { ...state, ...payload };
    case 'ADD_PRODUCTS_FAILURE':
      return { ...state, ...payload };
    case 'ADD_PRODUCTS_RESET':
      return {
        ...state,
        message: payload.message
      };

    default:
      return state;
  }
};

export default productsReducer;
