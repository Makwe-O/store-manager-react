import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import Axios from 'axios';
import mockCartData from './mockCartData';
import * as cartActions from './cartActions';
import { apiInstance } from '../../utils/axiosSetup';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
let store = mockStore();
const { clearCartResponse, returnedCart } = mockCartData;

describe('Cart actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });
  test('Dispatches the correct action and payload when getting cart is successful', () => {
    const expectedActions = [
      {
        type: 'GET_CART_SUCCESS',
        payload: returnedCart.products
      }
    ];
    const store = mockStore({});
    store.dispatch(cartActions.getCart()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the message when clearing cart', () => {
    const expectedActions = [
      {
        type: 'RESET_CART_MESSAGE',
        payload: clearCartResponse
      }
    ];
    const store = mockStore({});
    store.dispatch(cartActions.clearCart()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
