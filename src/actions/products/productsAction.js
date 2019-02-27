import makeRequest from '../../utils/axiosSetup';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const DELETE_PRODUCTS_SUCCESS = 'DELETE_PRODUCTS_SUCCESS';
export const DELETE_PRODUCTS_FAILURE = 'DELETE_PRODUCTS_FAILURE';
export const ADD_PRODUCTS_SUCCESS = 'ADD_PRODUCTS_SUCCESS';
export const ADD_PRODUCTS_FAILURE = 'ADD_PRODUCTS_FAILURE';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await makeRequest('/products', {
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

export const deleteProducts = id => async (dispatch) => {
  try {
    const res = await makeRequest(`/products/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_PRODUCTS_SUCCESS,
      payload: id
    });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCTS_FAILURE, payload: 'An error occured' });
  }
};

export const addProducts = (product_name, price, quantity, category_id, product_image, history) => async (dispatch) => {
  try {
    const res = await makeRequest('/products', {
      method: 'POST',
      body: {
        product_name,
        price,
        quantity,
        category_id,
        product_image
      }
    });
    dispatch({
      type: ADD_PRODUCTS_SUCCESS,
      payload: {
        message: res.message
      }
    });
    setTimeout(() => {
      history.push('/admin');
    }, 3000);
  } catch (error) {
    dispatch({
      type: ADD_PRODUCTS_FAILURE,
      payload: 'Could not add product'
    });
  }
};
