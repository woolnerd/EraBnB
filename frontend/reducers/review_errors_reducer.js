import {
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS
} from "../actions/review_actions";
import { LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullErrors = [];

const ReviewErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_REVIEW_ERRORS:
          return action.errors;
      case CLEAR_REVIEW_ERRORS:
          return _nullErrors;
      case LOGOUT_CURRENT_USER:
          return _nullErrors;
      default:
         return state;
  }
};

export default ReviewErrorsReducer;
