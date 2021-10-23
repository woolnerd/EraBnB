import {
  INVALID_ADDRESS,
  PHOTOS_LENGTH_ERROR,
  
} from "../actions/listing_actions";

const _nullErrors = [];

const ListingErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
    case PHOTOS_LENGTH_ERROR:
        return state.concat(action.error);
    case INVALID_ADDRESS:
          return state.concat(action.error);
      default:
         return state;
  }
};

export default ListingErrorsReducer;
