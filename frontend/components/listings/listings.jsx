import React  from "react";
import {ListingIndexItem} from './listing_index_item';
import  MapContainer from '../map/map_container';

class Listings extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings();
    }


    render() {
        
        const listings = this.props.listings.map((listing) => (
            !this.props.currentUser || this.props.currentUser.id !== listing.host_id ?
            <ListingIndexItem key={listing.id} listing={listing} /> : null
          ) 
        );

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