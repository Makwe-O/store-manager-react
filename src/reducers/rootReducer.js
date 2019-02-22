import { combineReducers } from 'redux';
import placeholderReducer from './placeholderReducer';
import loginReducer from './login/loginReducer';

const reducers = combineReducers({
  loginReducer
});

export default reducers;
