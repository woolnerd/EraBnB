import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import Listing from './listing';

const mSTP = ({entities, session}, ownProps) => {
    return (
{        listing: entities.listings[ownProps.match.params.listingId],
         currentUser: session.id,

}
    )
};

// const mSTP = ({entities}, ownProps) => ({
//     listing: entities.listings[ownProps.match.params.listingId]
// });




const mDTP = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default connect(mSTP, mDTP)(Listing);