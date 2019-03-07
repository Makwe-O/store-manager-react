import { createStore } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

describe('Root Reducer', () => {
  it('should return the initial auth state', () => {
    const expectedInitialAuthState = {
      isAuthenticated: false,
      role: '',
      user_id: '',
      message: ''
    };
    expect(store.getState().loginReducer).toEqual(expectedInitialAuthState);
  });
});
