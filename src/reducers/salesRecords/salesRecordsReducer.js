const initialState = {
  sales_record: []
};

const salesRecordsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_SALES_SUCCESS':
      return { ...state, sales_record: payload };
    default:
      return state;
  }
};

export default salesRecordsReducer;
