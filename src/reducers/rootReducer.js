import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import productsReducer from './products/productsReducer';
import categoriesReducer from './categories/categoriesReducer';
import salesRecordsReducer from './salesRecords/salesRecordsReducer';
import signUpReducer from './signUp/signUpReducer';

const reducers = combineReducers({
  loginReducer,
  productsReducer,
  categoriesReducer,
  salesRecordsReducer,
  signUpReducer
});

export default reducers;
