import { connect } from 'react-redux';
import ReviewItem from './review_item';
import { withRouter } from 'react-router-dom';
import { fetchListing } from '../../actions/listing_actions';

const mSTP = (state) => {
    return (
        {review: {},
        errors: state.errors.review
     }
    )
}


const mDTP = dispatch => ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
})


export default withRouter(connect(mSTP, mDTP)(ReviewItem))