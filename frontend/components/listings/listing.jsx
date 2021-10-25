import React from "react";
import { Route, Link } from "react-router-dom";
import BookingFormContainer from "../bookings/booking_form_container";
import ReviewItemContainer from "../reviews/review_item_container"
import ReviewItem from '../reviews/review_item';
import CreateReviewFormContainer from '../reviews/create_review_form_container';
import { getAvgRating } from './listing_index_item';
import { AiFillStar } from 'react-icons/ai';
import {BiHomeAlt} from 'react-icons/bi';
import {FaUmbrellaBeach} from 'react-icons/fa'; 
import {FaHandSparkles} from 'react-icons/fa';
// import {IoSparklesOutline} from 'react-icons/io';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import {FaHandHoldingHeart} from 'react-icons/fa';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.newReview;
    this.state.openReviewForm = false;
    this.state.shrinkBookingForm = true;
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

  toggleReviewForm() {
    this.props.clearReviewErrors();
    this.state.openReviewForm
      ? this.setState({ openReviewForm: false })
      : this.setState({ openReviewForm: true });
  }

  enlargeBookingForm() {
    this.state.shrinkBookingForm
      ? this.setState({ shrinkBookingForm: false })
      : this.setState({ shrinkBookingForm: true });
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
            className="classy-btn"
            onClick={() =>
              this.props.history.push(`/listings/${listing.id}/edit`)
            }
          >
            Update
          </button>
          <button
            className="classy-btn"
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
          className="classy-btn"
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
          id={idx === 0 ? "main-photo" : ""}
        />
      ))
    ) : (
      <h1>Sorry No Photos</h1>
    );

    
    // for (let i = 0; i <= 5 - listing.photoUrl.length;i++){
    //        <img
    //       key={i}
    //       src={listing.photoUrl[i]}
    //       alt="listing-photo"
    //       className="listing-img"
    //       id={idx === 0 ? "main-photo" : ""}
    //     />
    // }
      

    


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
      reviews.length &&
      reviews.filter((review) => review.author_id === currentUser).length
        ? true
        : false;
    reviews = reviews.length
      ? reviews.map((review) => (
          <div key={review.id} className="review-container">
            <ReviewItem
              listingId={this.props.match.params.listingId}
              currentUser={this.props.currentUser}
              review={review}
              review_authors={this.props.listing.review_authors}
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

    if (!listing.host) {
      return null;
    }


    return (
      { listing } && (
        <>
          <div key={listing.id} className="listing-heading">
            <h2>{listing.title}</h2>
            <div className="review-header">
              <AiFillStar className="review-star" />
              <p>
                {!!listing.reviews.length
                  ? getAvgRating(listing.reviews)
                  : ""}
                ({listing.reviews.length}{" "}
                {listing.reviews.length === 1 ? "review" : "reviews"})
                <span>&middot;</span>
                {formatAddress(listing.address)}
              </p>
            </div>
          </div>

          <div className="listing-photos">
            {photos[0]}
            <div className="adtl-photos-col-1">
              <div>{photos[1]}</div>
              <div>{photos[2]}</div>
            </div>
            <div className="adtl-photo-col-2">
              <div id="top-right-photo">{photos[3]}</div>
              <div id="bottom-right-photo">{photos[4]}</div>
            </div>
          </div>
          <div className="listing-container">
            <div className="listing-info-show">
              <h3>{listing.era_theme} Era theme by {listing.host.first_name}</h3>
              <div className="room-details">
                <p>{listing.num_bedrms} {listing.num_bedrms === 1 ? "bed" : "beds"}</p>
                <p>&middot;</p>
                <p>{listing.num_baths} {listing.num_baths === 1 ? "bath" : "baths"}</p>
              </div>

              {showEditAndDelete}
              {backToUserListings}
              <Link to="/listings/">
                <button className="classy-btn">Back to Listings</button>
              </Link>
            </div>
            <div className="body-booking">
              <div className="listing-body">
              <div className="icons-blurbs">
                  <div>
                    <BiHomeAlt/>
                    <div>
                      <h3>Entire home</h3>
                      <p>You’ll have the apartment to yourself.</p>
                    </div>
                  </div>
                  <div className="beach">
                    <FaUmbrellaBeach/>
                    <div>
                      <h3>Great location</h3>
                      <p>Within minutes to the beach.</p>
                    </div>
                  </div>
                  <div className="great-care">
                    <FaHandSparkles/>
                    <div>
                      <h3>Experienced host</h3>
                      <p>This host has proven their attention to detail.</p>
                    </div>
                  </div>
                  <div className="clean">
                    <MdOutlineHealthAndSafety/>
                    <div>
                    <h3>Enhanced Clean</h3>
                    <p>This Host committed to Erabnb's 5-step enhanced cleaning process.</p>
                  </div>
                  </div>

              </div>
              
                <p>{listing.description}</p>
              </div>
              <div className={"booking-container" + (!this.state.shrinkBookingForm ? "" : " expand")}>
                <BookingFormContainer listing={listing} enlargeBookingForm={()=>this.enlargeBookingForm()}/>
              </div>
            </div>
          </div>
          <div className="reviews-index-container">
            {listing.reviews.length ? (
              <div className="review-header-ratings">
                <div className="review-and-star-cont">
                  <AiFillStar className="review-star" />
                  <h3>
                    {!!listing.reviews.length
                      ? getAvgRating(listing.reviews)
                      : null}
                    <span>&middot;</span>
                    <span>
                      {listing.reviews.length}{" "}
                      {listing.reviews.length === 1 ? "review" : "reviews"}
                    </span>
                  </h3>
                </div>
              </div>
            ) : (
              <h3>No reviews just yet... </h3>
            )}
            {!hasReviewed &
            currentUser !== null &&
            listing.host_id !== currentUser ? (
            <div className="leave-review-link">
              <h4>We see you've booked this listing in the last two weeks!</h4>
              <h4>
                Click{" "}
                <span
                  className="review-link"
                  onClick={() => this.toggleReviewForm()}
                >
                  here
                </span>{" "}
                to leave a review
              </h4>
              <CreateReviewFormContainer
                forceReload={this.forceReload.bind(this)}
                openReviewForm={this.state.openReviewForm}
                toggleReviewForm={() => this.toggleReviewForm()}
              />
            </div>
            ) : null} 
            <div className="past-reviews-container">{reviews}</div>
          </div>
        </>
      )
    );
  }
}

  const formatAddress = (address) => {
    if (address.split(" ").length > 3) {
      let city = address.split(",").slice(-2)[0].trim()
      let state = address.split(",").slice(-2)[1].trim().split(" ")[0]
      return [city, state].join(", ");
    } else {
      return address
    }
  }


export default Listing;
