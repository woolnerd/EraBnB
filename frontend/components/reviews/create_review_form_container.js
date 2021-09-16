import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import CreateReviewForm from './create_review_form';
import { createReview, updateReview, deleteReview } from "../../actions/review_actions";
import { fetchListing, deleteListing } from "../../actions/listing_actions";


const mSTP = (state, ownProps) => {
  return (
    {

      newReview: {
        body: "",
        rating: "",
        listing_id: parseInt(ownProps.match.params.listingId),
        author_id: state.session.id,
      },
  
    }
  )
};

const mDTP = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),

})


export default withRouter(connect(mSTP, mDTP)(CreateReviewForm));