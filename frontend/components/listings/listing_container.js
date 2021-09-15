import { connect } from 'react-redux';
import { fetchListing, deleteListing } from "../../actions/listing_actions";
import { createReview, updateReview, deleteReview } from "../../actions/review_actions";
import Listing from './listing';

const mSTP = ({entities, session}, ownProps) => {
    // debugger
    return {
      listing: entities.listings[ownProps.match.params.listingId],
      currentUser: session.id,
      userListings: entities.users.user_listing,
    //   reviews: entities.listings[ownProps.match.params.listingId].reviews,
      newReview: {
        body: "",
        rating: "",
        author_id: session.id,
        listing_id: parseInt(ownProps.match.params.listingId),
      },
    };
};


const mDTP = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),

    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(Listing);