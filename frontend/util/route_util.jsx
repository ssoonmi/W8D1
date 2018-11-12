import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={(props) => {
      if (loggedIn) {
        return <Redirect to="/" />;
      } else {
        return <Component {...props}/>;
      }
    }}/>;
};

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  };
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));
