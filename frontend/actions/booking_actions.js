import * as APIBookingUtil from "../util/bookings_api_util";

export const RECEIVE_ALL_BOOKINGS = `RECEIVE_ALL_BOOKINGS`;
export const RECEIVE_BOOKING = `RECEIVE_BOOKING`;
export const REMOVE_BOOKING = `REMOVE_BOOKING`;

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

export const fetchBookings = () => (dispatch) =>
  APIBookingUtil.fetchBookings().then((bookings) =>
    dispatch(receiveAllBookings(bookings))
  );

export const fetchBooking = (bookingId) => (dispatch) =>
  APIBookingUtil.fetchBooking(bookingId).then((booking) =>
    dispatch(receiveBooking(booking))
  );

export const createBooking = (booking) => (dispatch) =>
  APIBookingUtil.createBooking(booking).then((booking) =>
    dispatch(receiveBooking(booking))
  );

export const updateBooking = (booking) => (dispatch) =>
  APIBookingUtil.updateBooking(booking).then((booking) =>
    dispatch(receiveBooking(booking))
  );

export const deleteBooking = (bookingId) => (dispatch) =>
  APIBookingUtil.deleteBooking(bookingId).then(() =>
    dispatch(removeBooking(bookingId))
  );
