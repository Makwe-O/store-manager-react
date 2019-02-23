const initialState = {
  products: []
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, products: payload };
    case 'DELETE_PRODUCTS_SUCCESS':
      const newState = state.products.filter(
        product => payload !== product.product_id
      );
      console.log(newState);
      return { ...state, products: newState };
    default:
      return state;
  }
};

export default productsReducer;
