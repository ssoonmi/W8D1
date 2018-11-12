import SessionForm from './SessionForm';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';

const msp = state => {
  return {
    formType: "Signup",
    errors: state.errors.session,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
