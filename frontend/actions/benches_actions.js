import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_MORE_BENCHES = "RECEIVE_MORE_BENCHES";

export const receiveBench = (payload) => {
  return {
    type: RECEIVE_BENCH,
    payload
  };
};

export const receiveBenches = (payload) => {
  return {
    type: RECEIVE_BENCHES,
    payload
  };
};

export const receiveMoreBenches = (payload) => {
  return {
    type: RECEIVE_MORE_BENCHES,
    payload
  };
};

export const fetchBench = (id) => dispatch => {
  return BenchAPIUtil.fetchBench(id).then((payload) => {
    dispatch(receiveBench(payload));
  });
};

export const fetchBenches = (filters) => dispatch => {
  return BenchAPIUtil.fetchBenches(filters).then((payload) => {
    dispatch(receiveBench(payload));
  });
};
