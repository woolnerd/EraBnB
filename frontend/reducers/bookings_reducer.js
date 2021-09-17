import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
} from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return { ...state, [action.booking.id]: action.booking };
    case REMOVE_BOOKING:
      let newState = { ...state };
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
