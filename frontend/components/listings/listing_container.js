import { connect } from 'react-redux';
import { fetchListing, deleteListing } from "../../actions/listing_actions";
import { createReview, updateReview, deleteReview, clearReviewErrors } from "../../actions/review_actions";
import Listing from './listing';

const mSTP = ({entities, session, errors}, ownProps) => {
    return {
      listing: entities.listings[ownProps.match.params.listingId],
      currentUser: session.id,
      userListings: entities.users.user_listing,
      newReview: {
        body: "",
        rating: "",
        author_id: session.id,
        listing_id: parseInt(ownProps.match.params.listingId),
      },
      errors: errors,
      // userBookings: entities.users[session.id].user_bookings,
    };
};


const mDTP = (dispatch) => ({
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  deleteListing: (listingId) => dispatch(deleteListing(listingId)),

  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
});

export default connect(mSTP, mDTP)(Listing);