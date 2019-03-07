import salesRecordsReducer from './salesRecordsReducer';
describe('Sales Reducer', () => {
  const initialAuthState = {
    sales_record: [],
    message: ''
  };

  it('should return the initial state', () => {
    expect(salesRecordsReducer(undefined, { type: 'DUMMYACTION' })).toEqual(
      initialAuthState
    );
  });

  it('should return a new state for getting sales record', () => {
    const action = {
      type: 'GET_SALES_SUCCESS',
      payload: []
    };

    const expectedState = {
      message: '',
      sales_record: []
    };

    expect(salesRecordsReducer(initialAuthState, action)).toEqual(
      expectedState
    );
  });
  it('should return a new state for adding sales record', () => {
    const action = {
      type: 'ADD_SALES_SUCCESS',
      payload: { message: '', sales_record: [] }
    };

    const expectedState = {
      message: '',
      sales_record: []
    };

    expect(salesRecordsReducer(initialAuthState, action)).toEqual(
      expectedState
    );
  });

  it('should return a new state for adding sales record failure', () => {
    const action = {
      type: 'ADD_SALES_FAILURE',
      payload: { message: '', sales_record: [] }
    };

    const expectedState = {
      message: '',
      sales_record: []
    };

    expect(salesRecordsReducer(initialAuthState, action)).toEqual(
      expectedState
    );
  });

  it('should return a new state for add sales record reset', () => {
    const action = {
      type: 'ADD_SALES_RESET',
      payload: { message: '', sales_record: [] }
    };

    const expectedState = {
      message: '',
      sales_record: []
    };

    expect(salesRecordsReducer(initialAuthState, action)).toEqual(
      expectedState
    );
  });
});
