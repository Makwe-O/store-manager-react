import productsReducer from './productsReducer';
const initialState = {
  products: [],
  message: ''
};

describe('Sales Reducer', () => {
  const initialAuthState = {
    products: [],
    message: ''
  };
  it('should return the initial state', () => {
    expect(productsReducer(undefined, { type: 'DUMMYACTION' })).toEqual(
      initialAuthState
    );
  });

  it('should return a new state for getting products', () => {
    const action = {
      type: 'GET_PRODUCTS_SUCCESS',
      payload: []
    };

    const expectedState = {
      message: '',
      products: []
    };

    expect(productsReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for deleting products', () => {
    const action = {
      type: 'DELETE_PRODUCTS_SUCCESS',
      payload: []
    };

    const expectedState = {
      products: []
    };

    expect(productsReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for deleting products reset', () => {
    const action = {
      type: 'DELETE_PRODUCTS_RESET',
      payload: { message: '', products: [] }
    };

    const expectedState = {
      message: '',
      products: []
    };

    expect(productsReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for adding products ', () => {
    const action = {
      type: 'ADD_PRODUCTS_SUCCESS',
      payload: { message: '', products: [] }
    };

    const expectedState = {
      message: '',
      products: []
    };

    expect(productsReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for adding products failure ', () => {
    const action = {
      type: 'ADD_PRODUCTS_FAILURE',
      payload: { message: '', products: [] }
    };

    const expectedState = {
      message: '',
      products: []
    };

    expect(productsReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for adding products reset', () => {
    const action = {
      type: 'ADD_PRODUCTS_RESET',
      payload: { message: '', products: [] }
    };

    const expectedState = {
      message: '',
      products: []
    };

    expect(productsReducer(initialAuthState, action)).toEqual(expectedState);
  });
});
