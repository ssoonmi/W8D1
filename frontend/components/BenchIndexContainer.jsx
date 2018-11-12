import {connect} from 'react-redux';
import BenchIndex from './BenchIndex';
// import {fetchBenches } from '../actions/benches_actions';

const msp = state => {
  return {
    benches: Object.values(state.entities.benches)
  };
};

// const mdp = dispatch => {
//   return {
//     fetchBenches: () => dispatch(fetchBenches())
//   };
// };

export default connect(msp, null)(BenchIndex);
