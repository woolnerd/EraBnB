import React from "react";
import { Link, Redirect } from "react-router-dom";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    const listings = currentUser.user_listing.map((listing) => (
      <Link to={`/listings/${listing.id}`}>
        <h3 key={listing.id}>{listing.title}</h3>
        {/* <img src={} alt="" /> */}
      </Link>
    ));

    return (
      <>
        <div className="today-banner">
          <h1>Today</h1>
          {/* <div key={currentUser.id} className="user-profile-container"> */}
          <div className="user-info">
            <h1>Hello, {currentUser.first_name}!</h1>
            <h2>Email: {currentUser.email}</h2>
            {/* <h3>Bio: {currentUser.bio}</h3> */}
          </div>
          {/* </div> */}
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
            {listings}
            <br />
            <Link to="/new/listing">
              <h3 className="user-btn">Find your next adventure</h3>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Users;
