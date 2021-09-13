import { connect } from "react-redux";
import { fetchBooking } from "../../actions/booking_actions";
import Booking from './booking';



const mSTP = ({ entities }) => ({

})


const mDTp = (dispatch) => ({
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId))
})



export default connect(mSTP, mDTP)(Booking)

