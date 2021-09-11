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
        <img src="https://img.icons8.com/ios/50/000000/airbnb.png" />
      </Link>
      <button className="search-btn">Start your search</button>
      <MenuContainer />
    </header>
    <Route exact path="/" component={Splash} />
    <div className="main-content">
      <h2>Explore nearby</h2>
      <div className="grid-container">
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
      </div>
      <h2>Live anywhere</h2>
      <div className="large-thumbs-container">
        <div>
          <div className="large-thumbs"></div>
          <h3>Unique stays</h3>
        </div>
        <div>
          <div className="large-thumbs"></div>
          <h3>Unique stays</h3>
        </div>
        <div>
          <div className="large-thumbs"></div>
          <h3>Unique stays</h3>
        </div>
        <div>
          <div className="large-thumbs"></div>
          <h3>Unique stays</h3>
        </div>
      </div>
      <div className="lower-third">
        <span>
          <h3>Try Hosting</h3>
        </span>
        <span>
          <p>
            Earn extra income and unlock new opportunities by sharing your
            space.
          </p>
        </span>
        <span>
          <button>Learn more</button>
        </span>
      </div>
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
  </div>
);

export default App;
