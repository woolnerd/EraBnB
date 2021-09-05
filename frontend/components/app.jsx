import React from 'react';
import { AuthRoute } from '../util/route_util';
// import { Provider } from 'react-redux';
import NavBarContainer from './navbar/navbar_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import MenuContainer from './menu/menu_container';
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
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <NavBarContainer />
        <MenuContainer />
        <h1>Welcome to Erabnb!</h1>
      {/* <Link to="/" className="header-link"> */}
      {/* </Link> */}
    </header>
  </div>
);

export default App;
