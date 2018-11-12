import { RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const errorsReducer = (state=[], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState= {
        session: action.errors.responseJSON
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default errorsReducer;
