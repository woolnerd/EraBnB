import { connect } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { withRouter } from "react-router-dom";
import Map from './map';

// const mSTP = ({ entities }, ownProps) => ({
//   listings: Object.values(entities.listings),
// });

const mSTP = ({ entities }, ownProps) => {
    return (

        {
            listings: Object.values(entities.listings),
        }
    )

};



const mDTP = (dispatch) => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default withRouter(connect(mSTP, mDTP)(Map));
