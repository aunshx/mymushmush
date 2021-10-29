import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import windowCheck from './windowCheck';

export default combineReducers({
  alert,
  auth,
  windowCheck
});
