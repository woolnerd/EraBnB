import React from "react";
import { Link } from "react-router-dom";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: this.props.currentUser.user_bookings,
      listings: this.props.currentUser.user_listings
    }
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser.user_bookings.length !== prevProps.currentUser.user_bookings.length) {
      this.setState({["bookings"]: this.props.currentUser.user_bookings})
    }
      if (this.props.currentUser.user_listings.length !== prevProps.currentUser.user_listings.length) {
      this.setState({["listings"]: this.props.currentUser.user_listings})
    }
  }

  render() {
    let { currentUser } = this.props;
    let listings;
    let bookings;

   listings = this.state.listings.map((listing) => {
    debugger
    return (
     <Link to={`/listings/${listing.listing.id}`}>
       <div key={listing.id} className="user-listing-container">
         <img src={`${listing.photoUrl[0]}`} alt="Listing Picture" />
         <div className="listing-date-location">
           <h5>Era theme: {listing.listing.era_theme}</h5>
           <h3 className="listing-address-profile">{listing.listing.address}</h3>
         </div>
         <div className="listing-descrp-pic">
           <img src={`${listing.photoUrl[0]}`}alt="Listing Thumbnail" className="thumbnail-trip" />
           <h5>{listing.listing.description}</h5>
         </div>
       </div>
     </Link>
    )
   })
  //  ));

   bookings =  this.state.bookings.map((booking) => {
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
          <div className="listings-create">
            <h2>Your listings </h2>
            <Link to="/new/listing">
              <h3 className="classy-btn">Create a New Listing</h3>
            </Link>
          </div>
          <div className="user-listings">
              {listings}
              <br />
          </div>
          <h2>Your Trips: </h2>
          <div className="user-trips">
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
