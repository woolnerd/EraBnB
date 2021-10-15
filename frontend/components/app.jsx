import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UsersContainer from './users/users_container';
import MenuContainer from './menu/menu_container';
import ListingsIndexContainer from '../components/listings/listings_index_container';
import ListingContainer from '../components/listings/listing_container';
import Modal from './modal/modal';
import SplashContainer from './splash/splash';
import ListingFormContainer from './listings/listing_form_container';
import BookingContainer from './bookings/booking_container';
import { Footer } from './footer/footer';
import SearchContainer from './search/search';
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
        <img className="airbnb-icon" src={redAirbnbLogo} />
      </Link>
      <SearchContainer />
      <MenuContainer />
    </header>
    <div className="cushion"> </div>
    <Route exact path="/" component={SplashContainer} />
    <Route exact path={`/search`} component={ListingsIndexContainer} />
    <Route exact path={`/listings/:listingId`} component={ListingContainer} />
    <Route exact path="/listings" component={ListingsIndexContainer} />
    <ProtectedRoute
      exact
      path="/new/listing"
      component={ListingFormContainer}
    />
    <ProtectedRoute exact path="/users/:userId" component={UsersContainer} />
    <ProtectedRoute
      exact
      path="/bookings/:bookingId"
      component={BookingContainer}
    />

    <Footer />
  </div>
);

export default App;
