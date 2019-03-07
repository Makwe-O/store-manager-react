import makeRequest from '../../utils/axiosSetup';

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
export const ADD_CATEGORIES_SUCCESS = 'ADD_CATEGORIES_SUCCESS';
export const ADD_CATEGORIES_FAILURE = 'ADD_CATEGORIES_FAILURE';
export const ADD_CATEGORIES_RESET = 'ADD_CATEGORIES_RESET';

export const addCategoriesReset = () => ({
  type: ADD_CATEGORIES_RESET,
  payload: {
    message: ''
  }
});

export const addCategoriesFailure = error => ({
  type: ADD_CATEGORIES_FAILURE,
  payload: error
});

export const addCategories = category_name => async dispatch => {
  try {
    const res = await makeRequest('/categories', {
      method: 'POST',
      body: {
        category_name
      }
    });

    dispatch({
      type: ADD_CATEGORIES_SUCCESS,
      payload: {
        message: res.message
      }
    });
    setTimeout(() => {
      dispatch(addCategoriesReset());
    }, 5000);
  } catch (error) {
    dispatch(addCategoriesFailure({ message: error.response.data.message }));
    setTimeout(() => {
      dispatch(addCategoriesReset());
    }, 5000);
  }
};

export const getCategories = () => {
  return async dispatch => {
    try {
      const res = await makeRequest(`/categories`, {
        method: 'GET'
      });
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: res.categories
      });
    } catch (error) {
      dispatch({ type: GET_CATEGORIES_FAILURE, payload: [] });
    }
  };
};
