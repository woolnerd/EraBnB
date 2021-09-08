import React from 'react';
// import { AuthRoute } from '../util/route_util';
// import { Provider } from 'react-redux';
// import NavBarContainer from './navbar/navbar_container';
// import LogInFormContainer from './session_form/login_form_container';
// import SignUpFormContainer from './session_form/signup_form_container';
import UsersContainer from './users/users';
import MenuContainer from './menu/menu_container';
import ListingsIndexContainer from '../components/listings/listings_index_container';
import ListingContainer from '../components/listings/listing_container';
import Modal from './modal/modal';
import { Splash } from './splash/splash';
import  Map from '../components/map/map';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <>
    <Modal />
    <header className="header-container">
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      {/* <NavBarContainer /> */}
      <img src="https://img.icons8.com/ios/50/000000/airbnb.png" />
      <MenuContainer />
    </header>
    <div className="main-content">
      <Route exact path="/" component={Splash} />
      <Route exact path="/listings" component={ListingsIndexContainer} />
      <Route exact path={`/listings/:listingId`} component={ListingContainer} />

      <Route exact path="/users" component={UsersContainer} />
      {/* <Map /> */}
    </div>
    {/* <Splash /> */}
  </>
);

export default App;
