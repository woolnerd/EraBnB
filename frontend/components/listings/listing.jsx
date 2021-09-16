import React from "react";
import { Route, Link } from "react-router-dom";
import BookingFormContainer from "../bookings/booking_form_container";
import ReviewItemContainer from "../reviews/review_item_container"
import ReviewItem from '../reviews/review_item';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.newReview
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state)
      .then(this.props.fetchListing(this.state.listing_id));
  }

  update(field) {
    console.log(field);
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }


  render() {
    if (!this.props.listing) {
      return null;
    }

    const { currentUser, listing } = this.props;

    // console.log(this.state);

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
      listing.bookings.map((booking, idx) => {
        return (
          <>
            <h3>Upcoming booking #{idx + 1}:</h3>
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

    const reviews = listing.reviews.map((review) => (
      <div className="review-container">
        <ReviewItem
          review={review}
          update={this.update}
          key={review.id}
          updateReview={this.props.updateReview}
          fetchListing={this.props.fetchListing}
          deleteReview={this.props.deleteReview}
        />
      </div>
    ));

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
              {!currentUser ? (
                <h1>Please login or signup to book</h1>
              ) : currentUser && currentUser !== listing.host_id ? (
                <Route props={listing} component={BookingFormContainer} />
              ) : (
                bookings
              )}
            </div>

              
            <div className="listing-info-show">
              <h3>Here's what people are saying: </h3>

              <div>

                {reviews}

                <div>
                  <h4>{this.state.body}</h4>
                  <h4>{this.state.rating}</h4>
                </div>

                <form onSubmit={this.handleSubmit}>
                  <textarea onChange={this.update("body")} />
                  <select
                    value={this.state.rating}
                    onChange={this.update("rating")}
                  >
                    <option disabled value="">
                      Choose a rating
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button className="session-submit">Submit review</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )
    );
  }
}

export default Listing;
