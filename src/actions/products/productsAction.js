import makeRequest from '../../utils/axiosSetup';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProducts = () => {
  return async dispatch => {
    try {
      const res = await makeRequest(`/products`, {
        method: 'GET'
      });
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res.products
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAILURE, payload: [] });
    }
  };
};
