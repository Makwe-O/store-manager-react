import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockSalesData from './mockSalesData';
import * as salesActions from './salesRecordsAction';
import { apiInstance } from '../../utils/axiosSetup';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
let store = mockStore();
const {
  addSalesSuccessMessage,
  addSalesRecordBody,
  returnedSalesRecord
} = mockSalesData;

describe('Sales actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });

  test('Dispatches the correct action and payload when adding sales record is successful', () => {
    const mock = new MockAdapter(Axios);

    mock.onPost('https://store-appl.herokuapp.com/api/v1/sales').reply(201, {
      success: true,
      message: addSalesSuccessMessage
    });

    const expectedActions = [
      {
        type: 'ADD_SALES_SUCCESS',
        payload: {
          message: addSalesSuccessMessage
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(salesActions.addSalesRecord(addSalesRecordBody)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when adding sales record is unsuccessful', () => {
    const mock = new MockAdapter(Axios);

    mock.onPost('https://store-appl.herokuapp.com/api/v1/sales').reply(500, {});

    const expectedActions = [
      {
        type: 'ADD_SALES_FAILURE',
        payload: {}
      }
    ];
    const store = mockStore({});
    store
      .dispatch(salesActions.addSalesRecord(addSalesRecordBody))
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  test('Dispatches the correct action and payload when getting sales record is successful', () => {
    const mock = new MockAdapter(Axios);

    mock.onGet('https://store-appl.herokuapp.com/api/v1/sales').reply(200, {
      success: true,
      sales_record: returnedSalesRecord
    });

    const expectedActions = [
      {
        type: 'GET_SALES_SUCCESS',
        payload: [
          {
            returnedSalesRecord
          }
        ]
      }
    ];
    const store = mockStore({});
    store.dispatch(salesActions.getSalesRecords()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when getting sales record is unsuccessful', () => {
    const mock = new MockAdapter(Axios);

    mock.onGet('https://store-appl.herokuapp.com/api/v1/sales').reply(500, {});

    const expectedActions = [
      {
        type: 'GET_SALES_FAILURE',
        payload: {}
      }
    ];
    const store = mockStore({});
    store.dispatch(salesActions.getSalesRecords()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Dispatches the correct action and payload when adding sales record reset is called', () => {
    const expectedActions = [
      {
        type: 'ADD_SALES_RESET',
        payload: {
          message: ''
        }
      }
    ];
    const store = mockStore({});
    store.dispatch(salesActions.addSalesReset());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
