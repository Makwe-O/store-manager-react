import makeRequest from '../../utils/axiosSetup';

export const GET_SALES_SUCCESS = 'GET_SALES_SUCCESS';
export const GET_SALES_FAILURE = 'GET_SALES_FAILURE';
export const ADD_SALES_SUCCESS = 'ADD_SALES_SUCCESS';
export const ADD_SALES_FAILURE = 'ADD_SALES_FAILURE';
export const ADD_SALES_RESET = 'ADD_SALES_RESET';

export const addSalesFailure = error => ({
  type: ADD_SALES_FAILURE,
  payload: error
});

export const addSalesReset = () => ({
  type: ADD_SALES_RESET,
  payload: {
    message: ''
  }
});

export const addSalesRecord = (
  user_id,
  product_id,
  sales_amount
) => async dispatch => {
  try {
    const res = await makeRequest('/sales', {
      method: 'POST',
      body: {
        user_id,
        product_id,
        sales_amount
      }
    });
    dispatch({
      type: ADD_SALES_SUCCESS,
      payload: {
        message: res.message
      }
    });
    setTimeout(() => {
      dispatch(addSalesReset());
    }, 5000);
  } catch (error) {
    dispatch(addSalesFailure({ message: error.response.data.message }));
    setTimeout(() => {
      dispatch(addSalesReset());
    }, 5000);
  }
};

export const getSalesRecords = () => {
  return async dispatch => {
    try {
      const res = await makeRequest(`/sales`, {
        method: 'GET'
      });
      dispatch({
        type: GET_SALES_SUCCESS,
        payload: res.sales_record
      });
    } catch (error) {
      dispatch({ type: GET_SALES_FAILURE, payload: [] });
    }
  };
};
