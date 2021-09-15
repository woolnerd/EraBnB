import { connect } from 'react-redux';
import { fetchListing, deleteListing } from "../../actions/listing_actions";
import Listing from './listing';

const mSTP = ({entities, session}, ownProps) => {
    return (
{        listing: entities.listings[ownProps.match.params.listingId],
         currentUser: session.id,
         userListings: entities.users.user_listing,
}
    )
};


const mDTP = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId))
});

export default connect(mSTP, mDTP)(Listing);