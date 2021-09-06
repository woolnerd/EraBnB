import React from 'react';
import { AuthRoute } from '../util/route_util';
// import { Provider } from 'react-redux';
import NavBarContainer from './navbar/navbar_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import MenuContainer from './menu/menu_container';
import Modal from './modal/modal';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <Modal />
    <header className="header-container">
        {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        {/* <NavBarContainer /> */}
        <img src="https://img.icons8.com/ios/50/000000/airbnb.png"/>
        <MenuContainer />
    </header>
    <Route exact path='/' component={NavBarContainer} />
  </div>
);

export default App;
