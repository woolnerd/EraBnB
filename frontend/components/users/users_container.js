import { connect } from 'react-redux';
import Users from './users';
import { fetchListings } from '../../actions/listing_actions';
import { fetchBookings } from '../../actions/booking_actions';


const mSTP = ({entities, session}) => {
    // debugger
        return {
          currentUser: entities.users[session.id],
          bookings: entities.users[session.id].user_bookings,
          listings: entities.users[session.id].user_listings,
        };
};

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchBookings: () => dispatch(fetchBookings())
});




export default connect(mSTP, mDTP)(Users);
