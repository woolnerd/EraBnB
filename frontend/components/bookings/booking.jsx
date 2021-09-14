import React from 'react';
import MapBookingContainer from '../map/map_booking_container'

class Booking extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBooking(this.props.match.params.bookingId);
    }
    
    componentDidUpdate() {
        this.props.fetchListing(this.props.booking.listing.id)
    }

    render(){
        if (!this.props.booking) {
            return null
        }
        return (
          <div>
            <div className="booking-container">
              {/* <img src={this.props.booking.listing.photoUrl} alt="" /> */}
              <h1>{this.props.booking.listing.title}</h1>
            </div>
            <div className="booking-info-book-show">
              <h4>Check in:{this.props.booking.check_in}</h4>
              <h4>Check out:{this.props.booking.check_out}</h4>
              <h4>Guests: {this.props.booking.guests}</h4>
              <h4>Total Price:{this.props.booking.total_price}</h4>
            </div>
            <div className="listing-info-book-show">
              <h4>Address: {this.props.booking.listing.address}</h4>
              <h4>Description{this.props.booking.listing.description}</h4>
              <h4>Theme: {this.props.booking.listing.era_theme}</h4>
              <h4>Listing updated at:{this.props.booking.listing.updated_at}</h4>
            </div>
            <MapBookingContainer listing={this.props.booking.listing}/>
          </div>
        );
    }

}

export default Booking