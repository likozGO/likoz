import { combineReducers } from 'redux';

import UserReducer from './Pages/Admin/User/UsersState/Reducer/User';
import UserSearch from './Pages/Admin/User/UsersState/Reducer/UserSearch';
import isLoginReducer from './Pages/Authorization/AuthorizationState/Reducer/isLogin';

const appReducers = combineReducers({
  UserReducer,
  UserSearch,
  isLoginReducer,
});

export default appReducers;
