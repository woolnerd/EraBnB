import { connect } from 'react-redux';
import ReviewItem from './review_item';
// import { fetchReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {

    return (

        {review: {} }
    )
}


const mDTP = dispatch => ({
    // fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
})


export default connect(mSTP, mDTP)(ReviewItem)