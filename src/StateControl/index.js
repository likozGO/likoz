import { combineReducers } from 'redux';

import UserReducer from './Admin/Reducer/User';
import isLoginReducer from './Authorization/Reducer/isLogin';

const allReducers = combineReducers({
  UserReducer,
  isLoginReducer,
});

export default allReducers;
