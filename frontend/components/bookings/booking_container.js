import { connect } from "react-redux";
import { createBooking, fetchBooking } from "../../actions/booking_actions";
import BookingForm from "./booking_form";

const mSTP = (state, ownProps) => {
    // debugger 
  return {
    formType: "Create Booking",
    booking: {
      listing_id: ownProps.match.params.listingId,
      booker_id: state.session.id,
      check_in: "",
      check_out: "",
      guests: "",
      total_price: "",
    },
  };
};

const mDTP = (dispatch) => ({
  action: (booking) => dispatch(createBooking(booking)),
  fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
});

export default connect(mSTP, mDTP)(BookingForm);
