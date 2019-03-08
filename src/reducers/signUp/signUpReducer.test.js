import signUpReducer from './signUpReducer';
import {
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_RESET
} from '../../actions/signUp/signUpAction';

describe('Auth Reducer', () => {
  const initialAuthState = {
    message: ''
  };

  it('should return the initial state', () => {
    expect(signUpReducer(undefined, { type: 'DUMMYACTION' })).toEqual(
      initialAuthState
    );
  });

  it('should return a new state for successfull  signup', () => {
    const action = {
      type: SIGNUP_USER_SUCCESS,
      payload: { message: 'User Created!' }
    };

    const expectedState = {
      message: 'User Created!'
    };

    expect(signUpReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for successfull  error', () => {
    const action = {
      type: SIGNUP_USER_ERROR,
      payload: { message: '' }
    };

    const expectedState = {
      message: ''
    };

    expect(signUpReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for reset signup', () => {
    const action = {
      type: SIGNUP_USER_RESET,
      payload: { message: '' }
    };

    const expectedState = {
      message: ''
    };

    expect(signUpReducer(initialAuthState, action)).toEqual(expectedState);
  });
});
