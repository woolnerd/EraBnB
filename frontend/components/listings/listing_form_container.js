import { connect } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import ListingForm from "./listing_form";

const mSTP = ({ entities }) => {
    // debugger
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
            num_bths: "",
        }
        
        }
    )
};

const mDTP = (dispatch) => ({
    action: (listing) => dispatch(createListing(listing))
});



export default connect(mSTP, mDTP)(ListingForm);
