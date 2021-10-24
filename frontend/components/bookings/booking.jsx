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
                  <h4>Era Theme {this.props.booking.listing.era_theme}</h4>
                  <p>&middot;</p>
                  <h4>Guests {this.props.booking.guests}</h4>
                  <p>&middot;</p>
                  <h4>Total Price ${this.props.booking.total_price}</h4>
                </div>

                <div className="listing-info-book-show">
                  <div className="booking-dates">
                    <div className="booking-range">
                      <div>
                        <h4 className="book-dates">Check-in</h4> 
                        <h4 >{new Date(this.props.booking.check_in).toDateString()}</h4>
                      </div>
                      <div>
                        <h4 className="book-dates">Check-out</h4>
                        <h4>{new Date(this.props.booking.check_out).toDateString()}</h4>
                      </div>
                    </div>
                  </div>
                  
                  <h4>What you can expect:</h4> 
                  <h4>{this.props.booking.listing.description}</h4>
          
                  <div className="host-details">
                    <h4>
                      Host name: {this.props.booking.host.first_name}
                       {this.props.booking.host.last_name}
                    </h4>
                    <h4>Email: { this.props.booking.host.email }</h4>
                    <h4>
                    Listing updated at: {new Date(this.props.booking.listing.updated_at).toDateString()}
                    </h4>
                  </div>
                  <div className="booking-btns">
                    <button
                      onClick={() =>
                        this.props
                          .cancelBooking(this.props.booking.id)
                          .then(this.props.history.push(`/listings/${this.props.booking.listing.id}`))
                      }
                      className="classy-btn"
                    >
                      Cancel booking
                    </button>
                    <button
                      onClick={() =>
                    this.props.history.push(`/users/${this.props.booking.booker.id}`)
                      }
                      className="classy-btn"
                    >
                      Your Profile
                    </button>
                  </div>
                </div>
              </div>

              <div id="booking-map-container">
                <MapBookingContainer 
                listing={this.props.booking.listing} 
                mapPhoto={this.props.booking.photoUrl[0]}
                />
              </div>
            </div>
        );
    }

}

export default Booking

