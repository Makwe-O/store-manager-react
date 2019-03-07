import makeRequest from '../../utils/axiosSetup';

export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';
export const SIGNUP_USER_RESET = 'SIGNUP_USER_RESET';

export const signUpFailure = error => ({
  type: SIGNUP_USER_ERROR,
  payload: error
});

export const signUpReset = () => ({
  type: SIGNUP_USER_RESET,
  payload: {
    message: ''
  }
});

export const signUp = (name, email, role, password) => async dispatch => {
  try {
    const res = await makeRequest('/auth/signup', {
      method: 'POST',
      body: {
        name,
        email,
        role,
        password
      }
    });

    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: {
        message: res.message
      }
    });
    setTimeout(() => {
      dispatch(signUpReset());
    }, 5000);
  } catch (error) {
    dispatch(signUpFailure({ message: error.response.data.message }));
    setTimeout(() => {
      dispatch(signUpReset());
    }, 5000);
  }
};
