import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


import { signup, login, logout} from './actions/session_actions'
import * as listingActions from './actions/listing_actions'
import * as bookingActions from './actions/booking_actions'
import * as reviewActions from './actions/review_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //testing
    window.store = store;
    window.dispatch = store.dispatch
    window.getState = store.getState
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
    window.listingActions = listingActions;
    window.bookingActions = bookingActions;
    window.newBooking = {
      listing_id: 3,
      booker_id: 2,
      check_in: "2022-01-01",
      check_out: "2022-01-10",
      guests: 3,
      total_price: 10055.55,
    };
    window.createReview = reviewActions.createReview;

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root)
})
