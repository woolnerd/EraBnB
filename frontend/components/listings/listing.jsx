import React from "react";
import { Route, Link } from "react-router-dom";
import BookingFormContainer from "../bookings/booking_form_container";
import ReviewItemContainer from "../reviews/review_item_container"
import ReviewItem from '../reviews/review_item';
import CreateReviewFormContainer from '../reviews/create_review_form_container'

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.newReview;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.forceReload();
  }

  forceReload() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state)
      .then(this.props.fetchListing(this.state.listing_id));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    if (!this.props.listing) {
      return null;
    }

    const { currentUser, listing } = this.props;

    const showEditAndDelete =
      currentUser === listing.host_id ? (
        <>
          <button
          className="session-submit sml-btn"
          onClick={() => this.props.history.push(`/listings/${listing.id}/edit`)}
        >
          Update
        </button>
        <button
          className="session-submit sml-btn"
          onClick={() =>
            this.props
              .deleteListing(listing.id)
              .then(() => this.props.history.push(`/users/${currentUser}`))
          }
        >
          Delete
        </button>
      </>
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

    let reviews = listing.reviews.sort((a, b) => b.id - a.id);

    const hasReviewed = 
          reviews.length && reviews.filter(review => review.author.id === currentUser).length 
          ?
          true : false;
    reviews = reviews.length
      ? reviews.map((review) => (
          <div key={review.id} className="review-container">
            <ReviewItem
              listingId={this.props.match.params.listingId}
              currentUser={this.props.currentUser}
              review={review}
              update={this.update}
              updateReview={this.props.updateReview}
              fetchListing={this.props.fetchListing}
              deleteReview={this.props.deleteReview}
              handleDelete={this.handleDelete}
              forceReload={this.forceReload.bind(this)}
              errors={this.props.errors}
              clearReviewErrors={this.props.clearReviewErrors}
            />
          </div>
        ))
      : null;

    return (
      { listing } && (
        <>
          <div key={listing.id} className="today-banner"></div>
          <div className="listing-item-show">
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
              {showEditAndDelete}
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
              {listing.reviews.length ? (
                <h3>Here's what people are saying: </h3>
              ) : (
                <h3>No Reviews Just Yet...  </h3>
              )}

              <div>
                {!hasReviewed &&
                currentUser !== null &&
                listing.host_id !== currentUser ? (
                  <CreateReviewFormContainer
                    forceReload={this.forceReload.bind(this)}
                  />
                ) : null}
                {reviews}
              </div>
            </div>
          </div>
        </>
      )
    );
  }
}

export default Listing;
