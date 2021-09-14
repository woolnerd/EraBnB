import React from "react";
import { Link, Redirect } from "react-router-dom";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // debugger
    this.props.fetchListings()
    this.props.fetchBookings()
  }

  render() {
    debugger
    let { currentUser, bookings, listings } = this.props;
    if (!listings && !bookings) {
      return null
    }
    console.log(this.props)
    console.log(listings)
   listings = listings.map((listing) => (
     <Link to={`/listings/${listing.listing.id}`}>
       <div key={listing.id}>
         <h3>{listing.listing.title}</h3>
       </div>
     </Link>
   ));

    //will display show page for booking
   bookings =  bookings.map((booking) => {
     debugger
      return (
      <Link to={`/bookings/${booking.booking.id}`}>
        <div key={booking.listing.id}>
          <h3 >{booking.listing.title}</h3>
        </div>
      </Link>
      )
    }

    );

    return (
      <>
        <div className="today-banner">
          <h1>Today</h1>
          <div className="user-info">
            <h1>Hello, {currentUser.first_name}!</h1>
            <h2>Email: {currentUser.email}</h2>
          </div>
        </div>
        <div
          className="your-res-container"
          style={{ backgroundImage: "url(" + mountains + ")" }}
        >
          <div>
            <h2>Your reservations</h2>
            <p>Guests will soon be on the way.</p>
            <p>When they book, they'll show up here.</p>
            <br />
            <p>Show past reservations</p>
          </div>
        </div>
        <div className="user-host-guest-container">
          <div className="user-listings">
            <h2>Your listings: </h2>
            {listings}
            <br />
            <Link to="/new/listing">
              <h3 className="user-btn">Create a New Listing</h3>
            </Link>
          </div>
          <div className="user-trips">
            <h2>Your Trips: </h2>
            {bookings}
            <br />
            <Link to="/listings">
              <h3 className="user-btn">Find your next adventure</h3>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Users;
