import { connect } from "react-redux";
import { fetchBooking, deleteBooking } from "../../actions/booking_actions";
import { fetchListing } from "../../actions/listing_actions";
import Booking from './booking';



const mSTP = ({ entities, errors}, ownProps) => {
    return (
        {booking: entities.bookings[ownProps.match.params.bookingId],
        errors
        }
    )
}


const mDTP = (dispatch) => ({
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    cancelBooking: (bookingId) => dispatch(deleteBooking(bookingId))
})



export default connect(mSTP, mDTP)(Booking)

