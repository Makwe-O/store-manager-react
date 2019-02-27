import makeRequest from '../../utils/axiosSetup';

export const GET_SALES_SUCCESS = 'GET_SALES_SUCCESS';
export const GET_SALES_FAILURE = 'GET_SALES_FAILURE';

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
