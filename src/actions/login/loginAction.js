import decodeJwt from 'jwt-decode';
import makeRequest from '../../utils/axiosSetup';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGIN_USER_RESET = 'LOGIN_USER_RESET';
export const LOGOUT = 'LOGOUT';

export const loginFailure = error => ({
  type: LOGIN_USER_ERROR,
  payload: error
});

export const loginReset = () => ({
  type: LOGIN_USER_RESET,
  payload: {
    message: ''
  }
});

export const logout = () => {
  localStorage.removeItem('userToken');
  return { type: LOGOUT, payload: {} };
};

export const loginLocal = ({ email, password }, history) => async dispatch => {
  try {
    const res = await makeRequest('/auth/login', {
      method: 'POST',
      body: {
        email,
        password
      }
    });

    const { token, message } = res;
    const role = decodeJwt(token).role;
    const user_id = decodeJwt(token).user_id;
    localStorage.setItem('userToken', token);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: { isAuthenticated: true, role, user_id, message }
    });

    setTimeout(() => {
      dispatch(loginReset());
      role === 'Admin' ? history.push('/admin') : history.push('./attendant');
    }, 3000);
  } catch (error) {
    dispatch(loginFailure({ message: error.response.data.message }));
    setTimeout(() => {
      dispatch(loginReset());
    }, 6000);
  }
};
