import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import productsReducer from './products/productsReducer';
import categoriesReducer from './categories/categoriesReducer';
import salesRecordsReducer from './salesRecords/salesRecordsReducer';
import signUpReducer from './signUp/signUpReducer';
import cartReducer from './cart/cartReducer';

const reducers = combineReducers({
  loginReducer,
  productsReducer,
  categoriesReducer,
  salesRecordsReducer,
  signUpReducer,
  cartReducer
});

export default reducers;
