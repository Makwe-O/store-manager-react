const placeholderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_REDUX':
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export default placeholderReducer;
