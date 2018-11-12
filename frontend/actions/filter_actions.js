import * as BenchAPIUtil from '../util/bench_api_util';
import {receiveBenches} from '../actions/benches_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export const filterMarkers = (filters) => dispatch => {
  return BenchAPIUtil.fetchBenches(filters).then((payload) => {
    dispatch(receiveBenches(payload));
    dispatch(updateBounds(filters.bounds));
  });
};
