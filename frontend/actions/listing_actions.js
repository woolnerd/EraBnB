import * as APIListingUtil from '../util/listings_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ALL_LISTINGS = `RECEIVE_ALL_LISTINGS`;
export const RECEIVE_LISTING = `RECEIVE_LISTING`;
export const REMOVE_LISTING = `REMOVE_LISTING`;
export const PHOTOS_LENGTH_ERROR = `PHOTOS_LENGTH_ERROR`;
export const INVALID_ADDRESS = `INVALID_ADDRESS`;
export const CLEAR_LISTING_ERRORS = `CLEAR_LISTING_ERRORS`;

const receiveAllListings = (listings) => ({
  type: RECEIVE_ALL_LISTINGS,
  listings,
});

const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing,
});

const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId,
});

const photosLengthError = () => ({
  type: PHOTOS_LENGTH_ERROR,
  error: 'Please submit at least 5 photos',
});

export const invalidAddress = () => ({
  type: INVALID_ADDRESS,
  error: 'Please double check your address',
});

export const clearListingErrors = () => ({
  type: CLEAR_LISTING_ERRORS,
});

export const fetchListings = (query) => (dispatch) =>
  APIListingUtil.fetchListings(query).then((listings) =>
    dispatch(receiveAllListings(listings))
  );

export const fetchSearchListings = (query) => (dispatch) =>
  APIListingUtil.fetchSearchListings(query).then((listings) =>
    dispatch(receiveAllListings(listings))
  );

export const fetchListing = (listingId) => (dispatch) =>
  APIListingUtil.fetchListing(listingId).then(
    (listing) => dispatch(receiveListing(listing)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );

export const fetchFlexListing = () => (dispatch) =>
  APIListingUtil.fetchFlexListing().then(
    (listing) => dispatch(receiveListing(listing)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );

export const createListing = (formData) => (dispatch) => {
  return APIListingUtil.createListing(formData).then(
    (listing) => dispatch(receiveListing(listing)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};

export const updateListing = (formData, listingId) => (dispatch) =>
  APIListingUtil.updateListing(formData, listingId).then(
    (listing) => dispatch(receiveListing(listing)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );

export const deleteListing = (listingId) => (dispatch) =>
  APIListingUtil.deleteListing(listingId).then(() =>
    dispatch(removeListing(listingId))
  );
