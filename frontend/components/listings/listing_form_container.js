import { connect } from "react-redux";
import { createListing, invalidAddress, clearListingErrors } from "../../actions/listing_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import ListingForm from "./listing_form";



const mSTP = (state) => {
    return {
      formType: "Create Listing",
      listing: {
        title: "",
        description: "",
        era_theme: "",
        address: "",
        num_bedrms: "",
        num_baths: "",
        price: "",
        clean_fee: "",
        service_fee: "",
        host_id: state.session.id,
        photoFile: null,
        photoUrl: null,
        photos: []
      },
      errors: state.errors.session.concat(state.errors.listing),
      currentUser: state.session.id
    };
};

const mDTP = (dispatch) => ({
    action: (formData, photosLength) => dispatch(createListing(formData, photosLength)),
    fetchListing: () => dispatch(fetchListing()),
    invalidAddress: () => dispatch(invalidAddress()),
    clearListingErrors: () => dispatch(clearListingErrors()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});



export default connect(mSTP, mDTP)(ListingForm);
