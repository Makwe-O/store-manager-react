import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockProductsData from './mockProductsData';
import * as productActions from './productsAction';
import { apiInstance } from '../../utils/axiosSetup';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
let store = mockStore();
const {
  successMessage,
  returnedProducts,
  addProductBody,
  errorMessage,
  addProductBodyFake,
  deleteProductSuccess
} = mockProductsData;

describe('Product actions', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });

  test('Dispatches the correct action and payload when getting product is successful', () => {
    const mock = new MockAdapter(Axios);

    mock.onGet('https://store-appl.herokuapp.com/api/v1/products').reply(200, {
      success: true,
      products: returnedProducts
    });

    const expectedActions = [
      {
        type: 'GET_PRODUCTS_SUCCESS',
        payload: {
          products: returnedProducts
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.getProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when getting product is unsuccessful', () => {
    const mock = new MockAdapter(Axios);

    mock
      .onGet('https://store-appl.herokuapp.com/api/v1/products')
      .reply(500, {});

    const expectedActions = [
      {
        type: 'GET_PRODUCTS_FAILURE',
        payload: { products: returnedProducts }
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.getProducts()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when adding product is successful', () => {
    const mock = new MockAdapter(Axios);

    mock.onPost('https://store-appl.herokuapp.com/api/v1/products').reply(201, {
      success: true,
      message: successMessage
    });

    const expectedActions = [
      {
        type: 'ADD_PRODUCTS_SUCCESS',
        payload: { message: successMessage }
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.addProducts(addProductBody)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when adding product is unsuccessful', () => {
    const mock = new MockAdapter(Axios);

    mock.onPost('https://store-appl.herokuapp.com/api/v1/products').reply(400, {
      success: false,
      error: errorMessage
    });

    const expectedActions = [
      {
        type: 'ADD_PRODUCTS_SUCCESS',
        payload: { message: errorMessage }
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.addProducts(addProductBodyFake)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when deleting product is successful', () => {
    const mock = new MockAdapter(Axios);
    mock
      .onDelete('https://store-appl.herokuapp.com/api/v1/products/1')
      .reply(200, {
        success: true,
        message: deleteProductSuccess
      });

    const expectedActions = [
      {
        type: 'DELETE_PRODUCTS_SUCCESS',
        payload: {
          id: 1,
          message: deleteProductSuccess
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.deleteProducts(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when deleting product is unsuccessful', () => {
    const mock = new MockAdapter(Axios);
    mock
      .onDelete('https://store-appl.herokuapp.com/api/v1/products/1')
      .reply(500, {});

    const expectedActions = [
      {
        type: 'DELETE_PRODUCTS_FAILURE',
        payload: {}
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.deleteProducts(1)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct payload when on the addProductsReset function', () => {
    const expectedActions = [
      {
        type: 'ADD_PRODUCTS_RESET',
        payload: { message: '' }
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.addProductsReset());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct payload when on the deleteProductsReset function', () => {
    const expectedActions = [
      {
        type: 'DELETE_PRODUCTS_RESET',
        payload: { message: '' }
      }
    ];
    const store = mockStore({});
    store.dispatch(productActions.deleteProductsReset());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
