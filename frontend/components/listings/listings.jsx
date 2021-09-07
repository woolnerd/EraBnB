import React  from "react";
import {ListingItem} from './listing_item';

class Listings extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchListings();
    }


    render() {
        const listings = this.props.listings.map((listing) => (
            <ListingItem key={listing.id} listing={listing} />
        ));
        return (
            <div className="listings-container">
                {listings}
            </div>
        )
    }
}



export default Listings;