import decodeJwt from 'jwt-decode';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_RESET,
  LOGOUT
} from '../../actions/login/loginAction';

const token = localStorage.getItem('userToken');
const initialAuthState = {
  isAuthenticated: Boolean(token),
  role: token ? decodeJwt(token).role : '',
  user_id: token ? decodeJwt(token).user_id : '',
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
    case LOGIN_USER_RESET:
      return {
        ...state,
        message: payload.message
      };
    case LOGOUT:
      return { ...initialAuthState, isAuthenticated: false };
    default:
      return state;
  }
};

export default loginReducer;
