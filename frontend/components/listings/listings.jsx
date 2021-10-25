import React  from "react";
import {ListingIndexItem} from './listing_index_item';
import  MapContainer from '../map/map_container';
import { Link } from 'react-router-dom';

class Listings extends React.Component {
    constructor(props){
        super(props);

        this.state = {noResults: false}
    }

    componentDidMount(){
            if (this.props.location.pathname !== "/search") {
                this.props.fetchListings();
            }

    }

    // noResults(){
    //     if (this.noResults) {

    //         return (
    //         <div className="no-results">
    //             <h3>That search did not return any results</h3>
    //             <Link className="no-results-btn" to="/listings">Click <span className="classy-btn">here</span> for all listings</Link>
    //         </div>
    //         )
    //     }
    // }

    componentDidUpdate(){
        if (!this.props.listings.length && this.noResults === false) {
            this.setState({noResults: true})
        }
    }
   

    render() {
        const listings = 
        this.props.listings.length ? 
        this.props.listings.map((listing) => (
            !this.props.currentUser || this.props.currentUser.id !== listing.host_id ?
            <ListingIndexItem key={listing.id} listing={listing} fetchListing={this.props.fetchListing} /> 
            : null
          ) 
        ) : null 
            
        return (
            <div id="listing-container-wrap">
                <div className="listing-map-flex">
                    <div className="listings-container">
                        {listings} 
                        {/* {this.state.noResults ? 
                        <div className="no-results">
                            <h3>That search did not return any results</h3>
                            <Link className="no-results-btn" to="/listings">Click <span className="classy-btn">here</span> for all listings</Link>
                        </div>
                        : null        
                    } */}
                    </div>
                    <MapContainer />
                </div>
            </div>
        )
    }
}



export default Listings;