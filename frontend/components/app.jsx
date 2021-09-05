import React from 'react';
import { AuthRoute } from '../util/route_util';
// import { Provider } from 'react-redux';
import WelcomeContainer from './welcome/welcome_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      {/* <Link to="/" className="header-link"> */}
        <h1>Welcome to Erabnb!</h1>
        <WelcomeContainer />
      {/* </Link> */}
    </header>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
