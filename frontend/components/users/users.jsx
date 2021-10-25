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
    const descrip = listing.listing.description.split(" ").length > 20 ? listing.listing.description.split(" ").slice(0,20).join(" ")+"..." :
                    listing.listing.description;
    return (
     <Link key={`${listing.listing.address} + ${listing.listing.id}`} to={`/listings/${listing.listing.id}`}>
       <div className="user-listing-container">
         <img src={`${listing.photoUrl[0]}`} alt="Listing Picture" />
         <div className="listing-date-location">
           <h5>Era theme: {listing.listing.era_theme}</h5>
           <h3 className="listing-address-profile">{listing.listing.address}</h3>
         </div>
         <div className="listing-descrp-pic">
           <img src={`${listing.photoUrl[0]}`}alt="Listing Thumbnail" className="thumbnail-trip" />
           <h5>{descrip}</h5>
         </div>
       </div>
     </Link>
    )
   })
  //  ));

   bookings =  this.state.bookings.map((booking) => {
      let checkIn = booking.booking.check_in.split("-")
      let checkOut = booking.booking.check_out.split("-")
      const descrip = booking.listing.description.split(" ").length > 20 ? booking.listing.description.split(" ").slice(0,20).join(" ")+"..." :
                      booking.listing.description;
      return (
     <Link key={`${booking.listing.address} + ${booking.listing.id}`} to={`/bookings/${booking.booking.id}`}>
       <div className="user-listing-container">
         <img src={`${booking.photoUrl[0]}`} alt="Listing Picture" />
         <div className="listing-date-location">
           <h5>Era theme: {booking.listing.era_theme}</h5>
           <h4>Booked {[checkIn[1],checkIn[2]].join("/")} - {[checkOut[1],checkOut[2],checkOut[0]].join("/")}</h4>
           <h3 className="listing-address-profile">{booking.listing.address}</h3>
         </div>
         <div className="listing-descrp-pic">
           <img src={`${booking.photoUrl[0]}`}alt="Listing Thumbnail" className="thumbnail-trip" />
           <h5>{descrip}</h5>
           <h5 className="booking-total">Total ${booking.booking.total_price}</h5>
         </div>
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
          <div className="listings-create">
            <h2>Your Trips </h2>
            <Link to="/listings">
              <h3 className="classy-btn">Find your next adventure</h3>
            </Link>
          </div>
          <div className="user-listings mg-btm-4">
            {bookings}
            <br />
          </div>
        </div>
      </>
    );
  }
}



export default Users;
