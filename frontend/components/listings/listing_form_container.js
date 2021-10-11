import { connect } from "react-redux";
import { createListing } from "../../actions/listing_actions";
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
      errors: state.errors
    };
};

const mDTP = (dispatch) => ({
    action: (formData) => dispatch(createListing(formData)),
    fetchListing: () => dispatch(fetchListing())
});



export default connect(mSTP, mDTP)(ListingForm);
