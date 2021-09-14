import { connect } from "react-redux";
import { fetchListings, fetchListing } from "../../actions/listing_actions";
import { withRouter } from "react-router-dom";
import MapBooking from "./map_booking";


const mSTP = ({ entities }) => {
  return {
    listings: Object.values(entities.listings),
  };
};

const mDTP = (dispatch) => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
});

export default withRouter(connect(mSTP, mDTP)(MapBooking));
