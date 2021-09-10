import { connect } from "react-redux";
import { updateListing } from "../../actions/listing_actions";
import ListingForm from "./listing_form";

const mSTP = (state, ownProps) => {
  return {
    formType: "Edit Listing",
    listing: state.listings[ownProps.match.params.listingId],
  };
};

const mDTP = (dispatch) => ({
  action: (listing) => dispatch(updateListing(listing)),
  fetchListing: () => dispatch(fetchListing()),
});

export default connect(mSTP, mDTP)(ListingForm);
