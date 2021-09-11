import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UsersContainer from './users/users_container';
import MenuContainer from './menu/menu_container';
import ListingsIndexContainer from '../components/listings/listings_index_container';
import ListingContainer from '../components/listings/listing_container';
import Modal from './modal/modal';
import { Splash } from './splash/splash';
import ListingFormContainer from './listings/listing_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFontAwesome } from "@fortawesome/free-brand-svg-icons";

// library.add(fas, faTwitter, faFontAwesome);

const App = () => (
  <div>
    <Modal />
    <header className="header-container">
      <Link to="/">
        <img className="airbnb-icon" src="https://img.icons8.com/ios/50/000000/airbnb.png" />
      </Link>
      <button className="search-btn">Start your search</button>
      <MenuContainer />
    </header>

      <Route exact path="/" component={Splash} />

      <Route exact path="/listings" component={ListingsIndexContainer} />
      <Route exact path={`/listings/:listingId`} component={ListingContainer} />
      {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      {/* <AuthRoute exact path="/users/:userId" component={Modal} />  */}
      <ProtectedRoute
        exact
        path="/new/listing"
        component={ListingFormContainer}
      />
      <ProtectedRoute exact path="/users/:userId" component={UsersContainer} />
  </div>
);

export default App;
