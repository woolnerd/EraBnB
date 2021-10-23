import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateListing, fetchListing,invalidAddress, clearListingErrors } from "../../actions/listing_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import EditListingForm from "./edit_listing_form";

const mSTP = (state, ownProps) => {
  return {
    formType: "Edit Listing",
    listing: state.entities.listings[ownProps.match.params.listingId],
    errors: state.errors.session.concat(state.errors.listing)
  };
};

const mDTP = (dispatch) => ({
  updateListing: (formData, listingId) => dispatch(updateListing(formData, listingId)),
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  invalidAddress: () => dispatch(invalidAddress()),
  clearListingErrors: () => dispatch(clearListingErrors()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mSTP, mDTP)(EditListingForm));
