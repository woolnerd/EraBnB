import React from "react";
import { Route, Link } from "react-router-dom";
import BookingFormContainer from "../bookings/booking_form_container";

class Listing extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  render() {
    if (!this.props.listing) {
      return null;
    }

    const { currentUser, listing } = this.props;

    console.log(this.props);

    const showDelete =
      currentUser === listing.host_id ? (
        <button
          className="session-submit sml-btn"
          onClick={() =>
            this.props
              .deleteListing(listing.id)
              .then((res) => this.props.history.push(`/users/${currentUser}`))
          }
        >
          Delete
        </button>
      ) : null;

    const backToUserListings =
      currentUser === listing.host_id ? (
        <button
          className="session-submit sml-btn"
          onClick={() => this.props.history.push(`/users/${currentUser}`)}
        >
          Your listings
        </button>
      ) : null;

    const photos = listing.photoUrl.length ? (
      listing.photoUrl.map((photo, idx) => (
        <img
          key={idx}
          src={photo}
          alt="listing-photo"
          className="listing-img"
        />
      ))
    ) : (
      <h1>Sorry No Photos</h1>
    );

    const bookings = listing.bookings.length ? (
      listing.bookings.map((booking) => {
        return (
          <>
            <h3>Your upcoming bookings:</h3>
            <Link to={`/bookings/${booking.id}`}>
              <h4>
                Check-in {booking.check_in} - Check-out {booking.check_out}
              </h4>
            </Link>
          </>
        );
      })
    ) : (
      <div>
        <h3>No upcoming bookings</h3>
      </div>
    );
    // debugger
    return (
      { listing } && (
        <>
          <div className="today-banner"></div>
          <div key={listing.id} className="listing-item-show">
            <div className="listing-container"></div>
            <div className="listing-photos">{photos}</div>
            <div className="listing-info-show">
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <p>${listing.price}/night</p>
              <p>
                Bedrooms {listing.num_bedrms}{" "}
                <span> Bathrooms {listing.num_baths}</span>
              </p>
              {showDelete}
              {backToUserListings}
              <Link to="/listings/">
                <button className="session-submit">Back to Listings</button>
              </Link>
            </div>

            <div className="listing-info-show">
              {(currentUser && currentUser !== listing.host_id) ||
              !currentUser ? (
                <Route props={listing} component={BookingFormContainer} />
              ) : (
                bookings
              )}
            </div>

            <div className="listing-info-show">
              <h3>Here's what people are saying</h3>
              <div>
                <h3>Title of review</h3>
                <h4>4.5/5</h4>
                <p>fdsfhiewrhoiwehriohewfufjv</p>
                <p>sdfaesdfjoiwefoiwef</p>
              </div>
              <div>
                <h3>Title of review</h3>
                <h4>4.5/5</h4>
                <p>fdsfhiewrhoiwehriohewfufjv</p>
                <p>sdfaesdfjoiwefoiwef</p>
              </div>
              <div>
                <h3>Title of review</h3>
                <h4>4.5/5</h4>
                <p>fdsfhiewrhoiwehriohewfufjv</p>
                <p>sdfaesdfjoiwefoiwef</p>
              </div>

              <Link to="/listings/">
                <button className="session-submit">Leave a review</button>
              </Link>
            </div>
          </div>
        </>
      )
    );
  }
}

export default Listing;
