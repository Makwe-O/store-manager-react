import decodeJwt from 'jwt-decode';
import { decode } from 'punycode';
import makeRequest from '../../utils/axiosSetup';
import SuccessMessage from '../../components/views/Message/ErrorMessage/ErrorMessage';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

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
    localStorage.setItem('userToken', token);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: { isAuthenticated: true, role, message }
    });

    setTimeout(() => {
      role === 'Admin' ? history.push('/admin') : history.push('./attendant');
    }, 3000);
  } catch (error) {
    const {
      response: { data }
    } = error;

    dispatch({
      type: LOGIN_USER_ERROR,
      payload: { message: data.message }
    });
  }
};
