const initialState = {
  sales_record: [],
  message: ''
};

const salesRecordsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_SALES_SUCCESS':
      return { ...state, sales_record: payload };
    case 'ADD_SALES_SUCCESS':
      return { ...state, ...payload };
    case 'ADD_SALES_FAILURE':
      return { ...state, ...payload };
    case 'ADD_SALES_RESET':
      return {
        ...state,
        message: payload.message
      };
    default:
      return state;
  }
};

export default salesRecordsReducer;
