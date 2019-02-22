const initialState = {
  categories: []
};

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_CATEGORIES_SUCCESS':
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export default categoriesReducer;
