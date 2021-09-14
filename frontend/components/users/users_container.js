import { connect } from 'react-redux';
import Users from './users';
import { fetchListings } from '../../actions/listing_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = ({entities, session}) => {
    // debugger
        return {
          currentUser: entities.users[session.id],
        };
};

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchBookings: () => dispatch(fetchBookings()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});




export default connect(mSTP, mDTP)(Users);
