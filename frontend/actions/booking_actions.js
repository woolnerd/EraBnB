import * as APIBookingUtil from "../util/bookings_api_util";

export const RECEIVE_ALL_BOOKINGS = `RECEIVE_ALL_BOOKINGS`;
export const RECEIVE_BOOKING = `RECEIVE_BOOKING`;
export const REMOVE_BOOKING = `REMOVE_BOOKING`;
export const RECEIVE_BOOKING_ERRORS = `RECEIVE_BOOKING_ERRORS`;
export const CLEAR_BOOKING_ERRORS = `CLEAR_BOOKING_ERRORS`;

const receiveAllBookings = (bookings) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings,
});

const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking,
});

const removeBooking = (bookingId) => ({
  type: REMOVE_BOOKING,
  bookingId,
});

const receiveBookingErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors,
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
});


export const fetchBookings = () => (dispatch) =>
  APIBookingUtil.fetchBookings().then((bookings) =>
    dispatch(receiveAllBookings(bookings))
  );

export const fetchBooking = (bookingId) => (dispatch) =>
  APIBookingUtil.fetchBooking(bookingId).then((booking) =>
    dispatch(receiveBooking(booking))
  );

export const createBooking = (booking) => (dispatch) => 
  APIBookingUtil.createBooking(booking).then(
    (booking) => dispatch(receiveBooking(booking)), 
    (error) => dispatch(receiveBookingErrors(error.responseJSON))
  );

export const updateBooking = (booking) => (dispatch) =>
  APIBookingUtil.updateBooking(booking).then(
    (booking) => dispatch(receiveBooking(booking)),
    (error) => dispatch(receiveBookingErrors(error.responseJSON))
  );

export const deleteBooking = (bookingId) => (dispatch) =>
  APIBookingUtil.deleteBooking(bookingId).then(() =>
    dispatch(removeBooking(bookingId))
  );
