import * as APIReviewUtil from "../util/reviews_api_util";


export const RECEIVE_ALL_REVIEWS = `RECEIVE_ALL_REVIEWS`;
export const RECEIVE_REVIEW = `RECEIVE_REVIEW`;
export const REMOVE_REVIEW = `REMOVE_REVIEW`;
export const RECEIVE_REVIEW_ERRORS = `RECEIVE_REVIEW_ERRORS`;
export const CLEAR_REVIEW_ERRORS = `CLEAR_REVIEW_ERRORS`;

const receiveAllreviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});


export const createReview = (review) => (dispatch) => {
  return (
    APIReviewUtil.createReview(review)
    .then(
      (review) => dispatch(receiveReview(review)), 
      (error) => dispatch(receiveReviewErrors(error.responseJSON))
      )
  )
}

export const updateReview = (review) => (dispatch) =>
  APIReviewUtil.updateReview(review).then(
    (review) => dispatch(receiveReview(review)), 
    (error) => dispatch(receiveReviewErrors(error.responseJSON))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  APIReviewUtil.deleteReview(reviewId).then(() =>
    dispatch(removeReview(reviewId))
  );
