import { connect } from "react-redux";
import { fetchBooking } from "../../actions/booking_actions";
import { fetchListing } from "../../actions/listing_actions";
import Booking from './booking';



const mSTP = ({ entities}, ownProps) => {
    return (
        {booking: entities.bookings[ownProps.match.params.bookingId]}
    )
}


const mDTP = (dispatch) => ({
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
})



export default connect(mSTP, mDTP)(Booking)

