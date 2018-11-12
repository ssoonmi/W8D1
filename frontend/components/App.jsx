import React from 'react';
import GreetingContainer from './GreetingContainer';
import {AuthRoute} from '../util/route_util';
import {Route} from 'react-router-dom';
import SignupFormContainer from './SignupFormContainer';
import LoginFormContainer from './LoginFormContainer';
import SearchContainer from './SearchContainer';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer/>
    </header>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer}/>
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
