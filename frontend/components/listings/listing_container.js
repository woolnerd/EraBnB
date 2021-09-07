import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import Listing from './listing';

// const mSTP = ({entities}, ownProps) => {
//     // debugger
//     listing: entities.listings[ownProps.match.params.id]
// };

const mSTP = ({entities}, ownProps) => ({
    listing: entities.listings[ownProps.match.params.listingId]
});




const mDTP = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default connect(mSTP, mDTP)(Listing);