import SessionForm from './SessionForm';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

const msp = state => {
  return {
    formType: "Login",
    errors: state.errors.session,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
