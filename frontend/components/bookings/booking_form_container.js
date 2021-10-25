import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearBookingErrors, createBooking, fetchBooking} from "../../actions/booking_actions";
import { fetchListing } from "../../actions/listing_actions";
import { openModal } from '../../actions/modal_actions';
import BookingForm from "./booking_form";

const mSTP = (state, ownProps) => {

  return {
    formType: "Create Booking",
    listing: state.entities.listings[ownProps.match.params.listingId],
    booking: {
      listing_id: ownProps.match.params.listingId,
      booker_id: state.session.id,
      check_in: "",
      check_out: "",
      guests: 2,
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
  clearErrors: () => dispatch(clearBookingErrors()),
  login: () => dispatch(openModal('login')),
});

export default withRouter(connect(mSTP, mDTP)(BookingForm));
