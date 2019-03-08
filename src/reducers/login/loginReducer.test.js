import loginReducer from './loginReducer';
import decodeJwt from 'jwt-decode';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_RESET,
  LOGOUT
} from '../../actions/login/loginAction';
describe('Login Reducer', () => {
  const initialAuthState = {
    isAuthenticated: false,
    role: '',
    user_id: '',
    message: ''
  };

  it('should return a new corect state on login', () => {
    const action = {
      type: 'LOGIN_USER_SUCCESS',
      payload: {
        isAuthenticated: true,
        role: 'Attendant',
        user_id: 1,
        message: 'Login Successful'
      }
    };

    const expectedState = {
      isAuthenticated: true,
      role: 'Attendant',
      user_id: 1,
      message: 'Login Successful'
    };

    expect(loginReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new corect state on login error', () => {
    const action = {
      type: 'LOGIN_USER_ERROR',
      payload: {
        isAuthenticated: false,
        role: '',
        user_id: '',
        message: 'Login Error'
      }
    };

    const expectedState = {
      isAuthenticated: false,
      role: '',
      user_id: '',
      message: 'Login Error'
    };

    expect(loginReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new corect state on login reset', () => {
    const action = {
      type: 'LOGIN_USER_RESET',
      payload: {
        message: ''
      }
    };

    const expectedState = {
      isAuthenticated: false,
      role: '',
      user_id: '',
      message: ''
    };

    expect(loginReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new corect state on logout', () => {
    const action = {
      type: 'LOGOUT',
      payload: {
        isAuthenticated: false,
        role: '',
        user_id: '',
        message: ''
      }
    };

    const expectedState = {
      isAuthenticated: false,
      role: '',
      user_id: '',
      message: ''
    };

    expect(loginReducer(initialAuthState, action)).toEqual(expectedState);
  });
});
