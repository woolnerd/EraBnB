import React  from "react";
import {ListingIndexItem} from './listing_index_item';
import  MapContainer from '../map/map_container';
const qs = require("query-string");

class Listings extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
            if (this.props.location.pathname !== "/search") {
                this.props.fetchListings();
            }
    }


    render() {
        // const searchResults = this.props.location.pathname !== "/search" ? 
        //         <h3>That search did not return any results</h3>

        const listings = this.props.listings.length ? this.props.listings.map((listing) => (
            !this.props.currentUser || this.props.currentUser.id !== listing.host_id ?
            <ListingIndexItem key={listing.id} listing={listing} /> : null
          ) 
        ) : <h3>That search did not return any results</h3>
        return (
            <div id="listing-container-wrap">
                <div className="listing-map-flex">
                    <div className="listings-container">
                        {listings}
                    </div>
                    <MapContainer />
                </div>
            </div>
        )
    }
}



export default Listings;