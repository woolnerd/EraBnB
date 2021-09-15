import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Listings from './listings';

const mSTP = ({ entities, session }) => ({
  listings: Object.values(entities.listings),
  currentUser: entities.users[session.id],
});



const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(Listings);