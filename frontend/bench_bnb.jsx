import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/Root';
import {merge} from 'lodash';

import {fetchBenches, fetchBench} from './actions/benches_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  let preloadedState = {};

  if (window.currentUser) {
    const {users, session} = window.currentUser;
    preloadedState = {
      entities: {
        users
      },
      session
    };

    delete window.currentUser;
  }

  const store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.merge = merge;
  window.fetchBench = fetchBench;
  window.fetchBenches = fetchBenches;
});
