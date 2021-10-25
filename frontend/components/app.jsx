import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UsersContainer from './users/users_container';
import MenuContainer from './menu/menu_container';
import ListingsIndexContainer from '../components/listings/listings_index_container';
import ListingContainer from '../components/listings/listing_container';
import Modal from './modal/modal';
import SplashContainer from './splash/splash';
import ListingFormContainer from './listings/listing_form_container';
import EditListingFormContainer from './listings/edit_form_container'
import BookingContainer from './bookings/booking_container';
import { Footer } from './footer/footer';
import SearchContainer from './search/search';
import {FaSuitcaseRolling} from 'react-icons/fa';
import {AiOutlineFieldTime} from 'react-icons/ai';
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
        <div className="logo">
          <h3>Era bnb</h3>
          <div className="logos">
            <AiOutlineFieldTime className="time-icon"/>
            <FaSuitcaseRolling className="luggage-icon"/>
          </div>
        </div>
        {/* <img className="airbnb-icon" src={redAirbnbLogo} /> */}
        {/* <div className="cover-logo"></div> */}
        {/* <div className="logo-cushion"></div> */}
      </Link>
      <SearchContainer />
      <MenuContainer />
    </header>
    <div className="cushion"> </div>
    <Route exact path="/" flexible={Window.flexible} component={SplashContainer} />
    <Route exact path={`/search`} component={ListingsIndexContainer} />
    <Route exact path={`/listings/:listingId`} component={ListingContainer} />
    <Route exact path="/listings" component={ListingsIndexContainer} />
    <ProtectedRoute
      exact
      path="/new/listing"
      component={ListingFormContainer}
    />
    <ProtectedRoute
      exact
      path="/listings/:listingId/edit"
      component={EditListingFormContainer}
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
