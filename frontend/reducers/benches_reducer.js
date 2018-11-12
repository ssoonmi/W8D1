import {merge} from 'lodash';
import {RECEIVE_BENCH, RECEIVE_BENCHES, RECEIVE_MORE_BENCHES} from '../actions/benches_actions';

const benchesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCH:
      return merge({}, state, action.payload.benches);
    case RECEIVE_BENCHES:
      return action.payload.benches;
    case RECEIVE_MORE_BENCHES:
      return merge({}, state, action.payload.benches);
    default:
      return state;
  }
};

export default benchesReducer;
