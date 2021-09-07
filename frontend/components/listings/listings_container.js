import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Listings from './listings';

const mSTP = (state) => ({
    listings: Object.values(state.listings)
});

// const mSTP = (state) => {
//     debugger
//     return
//     {
//     listings: Object.values(state.listings)
// }};



const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(Listings);