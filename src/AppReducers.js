import { combineReducers } from 'redux';

import UserReducer from './Pages/Admin/User/UsersState/Reducer/User';
import isLoginReducer from './Pages/Authorization/AuthorizationState/Reducer/isLogin';

const appReducers = combineReducers({
  UserReducer,
  isLoginReducer,
});

export default appReducers;
