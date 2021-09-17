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
            <div className="wrap-all">
              <div className="booking-info-container">
                <div className="booking-heading">
                  <h4>{this.props.booking.listing.address}</h4>
                  <h1>
                    Your Upcoming Stay at {this.props.booking.host.first_name}'s
                  </h1>
                </div>

                <div className="booking-top-container">
                  <img src={this.props.booking.photoUrl} alt="" />
                </div>

                <h1>{this.props.booking.listing.title}</h1>

                <div className="booking-info-book-show">
                  <h4>Guests: {this.props.booking.guests}</h4>
                  <h4>Total Price:{this.props.booking.total_price}</h4>
                </div>

                <div className="listing-info-book-show">
                  <div className="booking-dates">
                    <h4>Check-in {this.props.booking.check_in}</h4>
                    <h4>Check-out {this.props.booking.check_out}</h4>
                  </div>
                  <h4>Description: {this.props.booking.listing.description}</h4>
                  <h4>Theme: {this.props.booking.listing.era_theme}</h4>
                  <h4>
                    Listing updated at: {this.props.booking.listing.updated_at}
                  </h4>

                  <div className="host-details">
                    <h4>
                      Host name: {this.props.booking.host.first_name}
                       {this.props.booking.host.last_name}
                    </h4>
                    <h4>Email: { this.props.booking.host.email }</h4>
                  </div>

                  <button
                    onClick={() =>
                      this.props
                        .cancelBooking(this.props.booking.id)
                        .then(this.props.history.push(`/`))
                    }
                    className="session-submit"
                  >
                    Cancel booking
                  </button>
                </div>
              </div>

              <div id="booking-map-container">
                <MapBookingContainer listing={this.props.booking.listing} />
              </div>
            </div>
        );
    }

}

export default Booking