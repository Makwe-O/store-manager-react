import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockSignUpData from './mockSignUpData';
import * as signUpActions from './signUpAction';
import { apiInstance } from '../../utils/axiosSetup';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
let store = mockStore();
const {
  signUpBody,
  signUpSuccessMessage,
  signUpBodyFake,
  signUpErrorMessage
} = mockSignUpData;

describe('SignUp actions', () => {
  test('Dispatches the correct action and payload when signUp is successful', () => {
    const mock = new MockAdapter(Axios);

    mock
      .onPost('https://store-appl.herokuapp.com/api/v1/auth/signup')
      .reply(201, {
        success: true,
        message: signUpSuccessMessage
      });

    const expectedActions = [
      {
        type: 'SIGNUP_USER_SUCCESS',
        payload: {
          message: signUpSuccessMessage
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(signUpActions.signUp(signUpBody)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when signUp is unsuccessful', () => {
    const mock = new MockAdapter(Axios);

    mock
      .onPost('https://store-appl.herokuapp.com/api/v1/auth/signup')
      .reply(400, {
        success: false,
        message: signUpSuccessMessage
      });

    const expectedActions = [
      {
        type: 'SIGNUP_USER_ERROR',
        payload: {
          message: signUpErrorMessage
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(signUpActions.signUp(signUpBodyFake)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  test('Dispatches the correct action and payload for signUpReset', () => {
    const expectedActions = [
      {
        type: 'SIGNUP_USER_RESET',
        payload: {
          message: ''
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(signUpActions.signUpReset(signUpBody));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
