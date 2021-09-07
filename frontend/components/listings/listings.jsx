import React  from "react";
import {ListingIndexItem} from './listing_index_item';
import  Map from '../map/map';

class Listings extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchListings();
    }


    render() {
        const listings = this.props.listings.map((listing) => (
            <ListingIndexItem key={listing.id} listing={listing} />
        ));
        return (
            <div className="listing-map-flex">
                <div className="listings-container">
                    {listings}
                </div>
                <Map listings={listings}/>
            </div>
        )
    }
}



export default Listings;