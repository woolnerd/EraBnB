import {
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS,
} from "../actions/booking_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullErrors = [];

const BookingErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case CLEAR_BOOKING_ERRORS:
      return _nullErrors;
    case LOGOUT_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default BookingErrorsReducer;
