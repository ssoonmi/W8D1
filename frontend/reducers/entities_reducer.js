import users from './users_reducer';
import benches from './benches_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  users,
  benches
});
