import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Listings from './listings';

const mSTP = ({entities}) => ({
    listings: Object.values(entities.listings)
});



const mDTP = dispatch => ({
    fetchListings: (query) => dispatch(fetchListings(query))
});

export default connect(mSTP, mDTP)(Listings);