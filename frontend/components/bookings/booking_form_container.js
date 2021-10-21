import { connect } from "react-redux";
import { clearBookingErrors, createBooking, fetchBooking} from "../../actions/booking_actions";
import { fetchListing } from "../../actions/listing_actions";
import BookingForm from "./booking_form";

const mSTP = (state, ownProps) => {
  debugger
  return {
    formType: "Create Booking",
    listing: state.entities.listings[ownProps.match.params.listingId],
    booking: {
      listing_id: ownProps.match.params.listingId,
      booker_id: state.session.id,
      check_in: "",
      check_out: "",
      guests: "",
      total_price: 0,
    },
    errors: state.errors.booking,
    currentUser: state.session.id
  };
};

const mDTP = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking)),
  fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  clearErrors: () => dispatch(clearBookingErrors())
});

export default connect(mSTP, mDTP)(BookingForm);
