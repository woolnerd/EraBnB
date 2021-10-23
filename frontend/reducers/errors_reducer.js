import { combineReducers } from "redux";

import ListingErrorsReducer from "./listing_errors_reducer";
import BookingErrorsReducer from "./bookings_errors_reducer";
import ReviewErrorsReducer from "./review_errors_reducer";
import SessionErrorsReducer from "./session_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  review: ReviewErrorsReducer,
  booking: BookingErrorsReducer,
  listing: ListingErrorsReducer
});
