import Search from './Search';
import {connect} from 'react-redux';
import {fetchBenches } from '../actions/benches_actions';
import {filterMarkers} from '../actions/filter_actions';

const msp = state => {
  return {
    benches: state.entities.benches
  };
};

const mdp = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches()),
    filterMarkers: (bounds) => dispatch(filterMarkers(bounds))
  };
};

export default connect(msp, mdp)(Search);
