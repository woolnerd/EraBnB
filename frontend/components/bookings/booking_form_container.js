import { connect } from "react-redux";
import { createBooking, fetchBooking} from "../../actions/booking_actions";
import { fetchListing } from "../../actions/listing_actions";
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
      guests: "",
      total_price: 0,
    },
  
  };
};

const mDTP = (dispatch) => ({
  action: (booking) => dispatch(createBooking(booking)),
  fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
});

export default connect(mSTP, mDTP)(BookingForm);
