import * as APIListingUtil from '../util/listings_api_util'

export const RECEIVE_ALL_LISTINGS = `RECEIVE_ALL_LISTINGS`;
export const RECEIVE_LISTING = `RECEIVE_LISTING`;
export const REMOVE_LISTING = `REMOVE_LISTING`;

const receiveAllListings = listings => ({
    type: RECEIVE_ALL_LISTINGS,
    listings    
});

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

const removeListing = listing => ({
    type: REMOVE_LISTING,
})

export const fetchListings = () => dispatch => (
    APIListingUtil.fetchListings()
    .then( listings => dispatch(receiveAllListings(listings)))
);

export const fetchListing = listing => dispatch => (
    APIListingUtil.fetchListing(listing)
    .then( listing => dispatch(receiveListing(listinng)))
);

export const createListing = listingId => dispatch => (
    APIListingUtil.createListing(listingId)
    .then( listing => dispatch(receiveListing(listing)))
);

export const updateListing = listing => dispatch => (
    APIListingUtil.updateListing(listing.id)
    .then( listing => dispatch(receiveListing(listing)))
);

export const deleteListing = listingId => dispatch => (
    APIListingUtil.updateListing(listingId)
    .then( () => dispatch(removeListing(listId)))
);