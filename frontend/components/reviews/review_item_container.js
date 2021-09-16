import { connect } from 'react-redux';
import ReviewItem from './review_item';


const mSTP = (state, ownProps) => {
    debugger

    return (

        {review: {} }
    )
}


const mDTP = dispatch => ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
})


export default connect(mSTP, mDTP)(ReviewItem)