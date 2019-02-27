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
        product => payload !== product.product_id
      );
      return { ...state, products: newState };
    case 'ADD_PRODUCTS_SUCCESS':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default productsReducer;
