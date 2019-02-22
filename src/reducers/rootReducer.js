import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import productsReducer from './products/productsReducer';
import categoriesReducer from './categories/categoriesReducer';

const reducers = combineReducers({
  loginReducer,
  productsReducer,
  categoriesReducer
});

export default reducers;
