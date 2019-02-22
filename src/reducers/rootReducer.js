import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import productsReducer from './products/productsReducer';

const reducers = combineReducers({
  loginReducer,
  productsReducer
});

export default reducers;
