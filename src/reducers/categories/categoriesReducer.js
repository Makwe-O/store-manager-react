const initialState = {
  categories: [],
  message: ''
};

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_CATEGORIES_SUCCESS':
      return { ...state, categories: payload };
    case 'ADD_CATEGORIES_SUCCESS':
      return { ...state, ...payload };
    case 'ADD_CATEGORIES_FAILURE':
      return { ...state, ...payload };
    case 'ADD_CATEGORIES_RESET':
      return {
        ...state,
        message: payload.message
      };
    default:
      return state;
  }
};

export default categoriesReducer;
