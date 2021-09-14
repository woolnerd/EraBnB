import { combineReducers } from 'redux';

import users from './users_reducer';
import user from './user_reducer';
import listings from './listings_reducer';
import bookings from './bookings_reducer';

export default combineReducers({
    user,
    users,
    listings,
    bookings
});