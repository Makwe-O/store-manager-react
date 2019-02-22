const initialState = {
  products: []
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default productsReducer;
