import {
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_RESET
} from '../../actions/signUp/signUpAction';

const initialState = {
  message: ''
};

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...payload };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        ...payload
      };
    case SIGNUP_USER_RESET:
      return {
        ...state,
        message: payload.message
      };
    default:
      return state;
  }
};

export default signUpReducer;
