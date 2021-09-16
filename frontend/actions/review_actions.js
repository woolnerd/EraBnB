import * as APIReviewUtil from "../util/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = `RECEIVE_ALL_REVIEWS`;
export const RECEIVE_REVIEW = `RECEIVE_REVIEW`;
export const REMOVE_REVIEW = `REMOVE_REVIEW`;

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

// export const fetchReviews = () => (dispatch) =>
//   APIReviewUtil.fetchReviews().then((reviews) =>
//     dispatch(receiveAllreviews(reviews))
//   );

// export const fetchReview = (reviewId) => (dispatch) =>
//   APIReviewUtil.fetchReview(reviewId).then((review) =>
//     dispatch(receiveReview(review))
//   );

export const createReview = (review) => (dispatch) =>
  APIReviewUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
    // console.log(review)
  )

export const updateReview = (review) => (dispatch) =>
  APIReviewUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  APIReviewUtil.deleteReview(reviewId).then(() =>
    dispatch(removeReview(reviewId))
  );
