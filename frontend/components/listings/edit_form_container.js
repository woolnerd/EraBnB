import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateListing, fetchListing } from "../../actions/listing_actions";
import EditListingForm from "./edit_listing_form";

const mSTP = (state, ownProps) => {
  return {
    formType: "Edit Listing",
    listing: state.entities.listings[ownProps.match.params.listingId],
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => ({
  updateListing: (formData, listingId) => dispatch(updateListing(formData, listingId)),
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
});

export default withRouter(connect(mSTP, mDTP)(EditListingForm));
