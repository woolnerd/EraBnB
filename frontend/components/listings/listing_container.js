import { connect } from 'react-redux';
import { fetchListing, deleteListing } from "../../actions/listing_actions";
// import { } from '../../util/listings_api_util';
import Listing from './listing';

const mSTP = ({entities, session}, ownProps) => {
    return (
{        listing: entities.listings[ownProps.match.params.listingId],
         currentUser: session.id,

}
    )
};


const mDTP = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId))
});

export default connect(mSTP, mDTP)(Listing);