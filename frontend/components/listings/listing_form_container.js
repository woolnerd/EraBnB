import { connect } from "react-redux";
import { createListing } from "../../actions/listing_actions";
import ListingForm from "./listing_form";



const mSTP = (state, ownProps) => {
    return (
        {formType: 'Create Listing',
        listing: {
            title: "",
            description:"",
            era_theme: "",
            address: "",
            num_bedrms: "",
            num_baths: "",
            price: "",
            clean_fee: "",
            service_fee: "",
            host_id: state.session.id
        }
        
        }
    )
};

const mDTP = (dispatch) => ({
    action: (listing) => dispatch(createListing(listing))
});



export default connect(mSTP, mDTP)(ListingForm);
