import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import Axios from 'axios';
import mockCategoriesData from './mockCategoriesData';
import * as categoryActions from './categoriesAction';
import { apiInstance } from '../../utils/axiosSetup';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
let store = mockStore();
const {
  addCategoryData,
  duplicateFailureResponse,
  returnedCategories,
  successResponse
} = mockCategoriesData;
describe('Categories actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });

  test('Dispatches the correct action and payload when getting categories is unsuccessful', () => {
    const mock = new MockAdapter(Axios);

    mock
      .onGet('https://store-appl.herokuapp.com/api/v1/categories')
      .reply(500, {});

    const expectedActions = [
      {
        type: 'GET_CATEGORIES_FAILURE',
        payload: {}
      }
    ];
    const store = mockStore({});
    store.dispatch(categoryActions.getCategories()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload on categories reset', () => {
    const expectedActions = [
      {
        type: 'ADD_CATEGORIES_RESET',
        payload: { message: '' }
      }
    ];
    const store = mockStore({});
    store.dispatch(categoryActions.addCategoriesReset());
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('Dispatches the correct action and payload on addcategories failure', () => {
    const expectedActions = [
      {
        type: 'ADD_CATEGORIES_FAILURE',
        payload: ''
      }
    ];
    const store = mockStore({});
    store.dispatch(categoryActions.addCategoriesFailure(''));
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('Dispatches the correct action and payload on addcategories failure api', () => {
    const mock = new MockAdapter(Axios);

    mock
      .onPost('https://store-appl.herokuapp.com/api/v1/categories')
      .reply(409, {
        success: false,
        message: duplicateFailureResponse
      });
    const expectedActions = [
      {
        type: 'ADD_CATEGORIES_FAILURE',
        payload: {
          message: duplicateFailureResponse
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(categoryActions.addCategories(addCategoryData)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload on getting categories success', () => {
    const mock = new MockAdapter(Axios);

    mock
      .onGet('https://store-appl.herokuapp.com/api/v1/categories')
      .reply(200, {
        success: true,
        categories: returnedCategories
      });
    const expectedActions = [
      {
        type: 'GET_CATEGORIES_SUCCESS',
        payload: {
          returnedCategories
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(categoryActions.getCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload on getting categories success', () => {
    const mock = new MockAdapter(Axios);

    mock
      .onPost('https://store-appl.herokuapp.com/api/v1/categories')
      .reply(200, {
        success: true,
        message: successResponse
      });
    const expectedActions = [
      {
        type: 'ADD_CATEGORIES_SUCCESS',
        payload: {
          successResponse
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(categoryActions.addCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
