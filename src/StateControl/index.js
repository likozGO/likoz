import { combineReducers } from 'redux';

import PopupReducer from './Admin/Reducer/Popup';
import isLoginReducer from './Authorization/Reducer/isLogin';

const allReducers = combineReducers({
  PopupReducer,
  isLoginReducer,
});

export default allReducers;
