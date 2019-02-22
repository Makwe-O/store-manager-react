import makeRequest from '../../utils/axiosSetup';

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const getCategories = () => {
  return async dispatch => {
    try {
      const res = await makeRequest(`/categories`, {
        method: 'GET'
      });
      console.log();
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: res.categories
      });
    } catch (error) {
      dispatch({ type: GET_CATEGORIES_FAILURE, payload: [] });
    }
  };
};
