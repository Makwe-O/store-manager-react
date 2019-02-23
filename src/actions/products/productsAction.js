import makeRequest from '../../utils/axiosSetup';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const DELETE_PRODUCTS_SUCCESS = 'DELETE_PRODUCTS_SUCCESS';
export const DELETE_PRODUCTS_FAILURE = 'DELETE_PRODUCTS_FAILURE';

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

export const deleteProducts = id => {
  return async dispatch => {
    console.log('d');
    try {
      const res = await makeRequest(`/products/${id}`, {
        method: 'DELETE'
      });
      console.log(res);

      dispatch({
        type: DELETE_PRODUCTS_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({ type: DELETE_PRODUCTS_FAILURE, payload: 'An error occured' });
    }
  };
};
