import decodeJwt from 'jwt-decode';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from '../../actions/login/loginAction';

const token = localStorage.getItem('userToken');
const initialAuthState = {
  isAuthenticated: Boolean(token),
  role: token ? decodeJwt(token).role : '',
  message: ''
};

const loginReducer = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, ...payload };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default loginReducer;
