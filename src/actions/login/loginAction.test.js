import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockLoginData from './mockLoginData';
import * as loginActions from './loginAction';
import { apiInstance } from '../../utils/axiosSetup';
import decodeJwt from 'jwt-decode';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { successResponse, loginData } = mockLoginData;
jest.mock('jwt-decode');
jest.useFakeTimers();

describe('Login actions', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });
  test('Dispatches the correct action and payload login fails', () => {
    const mock = new MockAdapter(Axios);
    const history = {
      push: []
    };
    mock
      .onPost('https://store-appl.herokuapp.com/api/v1/auth/login')
      .reply(500, {
        message: 'error'
      });

    const expectedActions = [
      {
        type: 'LOGIN_USER_ERROR',
        payload: { message: 'error' }
      }
    ];
    const store = mockStore({});
    store
      .dispatch(loginActions.loginLocal({ email: '', password: '' }, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('Dispatches the correct action and payload login is successful', () => {
    decodeJwt.mockImplementation(() => {
      return {
        role: '',
        user_id: ''
      };
    });
    const mock = new MockAdapter(Axios);
    const history = {
      push: []
    };
    mock
      .onPost('https://store-appl.herokuapp.com/api/v1/auth/login')
      .reply(200, {
        successResponse
      });

    const expectedActions = [
      {
        type: 'LOGIN_USER_SUCCESS',
        payload: {
          isAuthenticated: true,
          role: '',
          user_id: '',
          message: successResponse.message
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(loginActions.loginLocal(loginData, history)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload login is successful after settimeout', () => {
    decodeJwt.mockImplementation(() => {
      return {
        role: '',
        user_id: ''
      };
    });
    const mock = new MockAdapter(Axios);
    const history = {
      push: []
    };
    mock
      .onPost('https://store-appl.herokuapp.com/api/v1/auth/login')
      .reply(200, {
        successResponse
      });

    const expectedActions = [
      {
        type: 'LOGIN_USER_SUCCESS',
        payload: {
          isAuthenticated: true,
          message: undefined,
          role: '',
          user_id: '',
          message: ''
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(loginActions.loginLocal(loginData, history)).then(() => {
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(
        expect.any(store.dispatch(loginActions.loginReset())),
        3000
      );
    });
  });
  // test('Dispatches the correct action and payload when login reset is successful', () => {
  //   const mock = new MockAdapter(Axios);
  //   const history = {
  //     push: []
  //   };
  //   mock
  //     .onPost('https://store-appl.herokuapp.com/api/v1/auth/login')
  //     .reply(200, {
  //       successResponse
  //     });

  //   const expectedActions = [
  //     {
  //       type: 'LOGIN_USER_SUCCESS',
  //       payload: { message: '' }
  //     }
  //   ];
  //   const store = mockStore({});
  //   store.dispatch(loginActions.loginLocal(loginData, history)).then(() => {
  //     store.dispatch(loginActions.loginReset()).then(() => {
  //       expect(store.getActions()).toEqual(expectedActions);
  //     });
  //   });
  // });

  test('Dispatches the correct action and payload on logout', () => {
    const expectedActions = [
      {
        type: 'LOGOUT',
        payload: {}
      }
    ];
    const store = mockStore({});
    store.dispatch(loginActions.logout());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct action and payload on logout reset', () => {
    const expectedActions = [
      {
        type: 'LOGIN_USER_RESET',
        payload: { message: '' }
      }
    ];
    const store = mockStore({});
    store.dispatch(loginActions.loginReset());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
