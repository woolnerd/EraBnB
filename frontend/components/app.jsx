import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import UsersContainer from './users/users_container';
import ListingsIndexContainer from '../components/listings/listings_index_container';
import ListingContainer from '../components/listings/listing_container';
import Modal from './modal/modal';
import SplashContainer from './splash/splash';
import ListingFormContainer from './listings/listing_form_container';
import EditListingFormContainer from './listings/edit_form_container'
import BookingContainer from './bookings/booking_container';
import NavBar from '../components/navbar/navbar'
import { Footer } from './footer/footer';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Modal />
    <NavBar />
    <Route exact path="/" flexible={Window.flexible} component={SplashContainer} />
    <Route exact path={`/search`} component={ListingsIndexContainer} />
    <Route exact path={`/listings/:listingId`} component={ListingContainer} />
    <Route exact path="/listings" component={ListingsIndexContainer} />
    <ProtectedRoute exact path="/new/listing" component={ListingFormContainer} />
    <ProtectedRoute exact path="/listings/:listingId/edit" component={EditListingFormContainer} />
    <ProtectedRoute exact path="/users/:userId" component={UsersContainer} />
    <ProtectedRoute exact path="/bookings/:bookingId" component={BookingContainer} />
    <Footer />
  </div>
);

export default App;
