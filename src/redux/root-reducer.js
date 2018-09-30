import { combineReducers } from 'redux';

import comments from './comments/comments-reducer';
import auth from './auth/auth-reducer';

export default combineReducers({
  comments,
  auth
});