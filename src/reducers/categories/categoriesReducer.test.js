import categoriesReducer from './categoriesReducer';
const initialState = {
  categories: [],
  message: ''
};

describe('Sales Reducer', () => {
  const initialAuthState = {
    categories: [],
    message: ''
  };

  it('should return a new state for getting categories', () => {
    const action = {
      type: 'GET_CATEGORIES_SUCCESS',
      payload: []
    };

    const expectedState = {
      message: '',
      categories: []
    };

    expect(categoriesReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for adding categories', () => {
    const action = {
      type: 'ADD_CATEGORIES_SUCCESS',
      payload: { message: '', categories: [] }
    };

    const expectedState = {
      message: '',
      categories: []
    };

    expect(categoriesReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for adding categories failure', () => {
    const action = {
      type: 'ADD_CATEGORIES_FAILURE',
      payload: {
        message: ''
      }
    };

    const expectedState = {
      message: '',
      categories: []
    };

    expect(categoriesReducer(initialAuthState, action)).toEqual(expectedState);
  });

  it('should return a new state for adding categories reset', () => {
    const action = {
      type: 'ADD_CATEGORIES_RESET',
      payload: {
        message: ''
      }
    };

    const expectedState = {
      message: '',
      categories: []
    };

    expect(categoriesReducer(initialAuthState, action)).toEqual(expectedState);
  });
});
