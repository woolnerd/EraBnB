import React from "react";
import { Link } from "react-router-dom";

class Listing extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  render() {
    if (!this.props.listing) {
        return null;
    }
    const {currentUser, listing, userListings} = this.props;
        const showDelete =
          currentUser === listing.host_id ? (
            <button
            className="session-submit sml-btn"
              onClick={() =>
                this.props
                  .deleteListing(listing.id)
                  .then((res) =>
                    this.props.history.push(`/users/${currentUser}`)
                  )
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
          {/* {userListings.length > 1 ? "s" : null} */}
        </button>
      ) : null; 
      
        // debugger
        const photos = listing.photoUrl.length ? listing.photoUrl.map((photo, idx) => (
          <img key={idx} src={photo} alt="listing-photo" className="listing-img"/> 
          )) : <h1>Sorry No Photos</h1>

    return (
      { listing } && (
        <>
          <div className="today-banner"></div>
          <div key={listing.id} className="listing-item-show">
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
              <h3>Want to Book it?</h3>
              <p>Lorem ipsum kinda stuff</p>
              <p>Lorem ipsum kinda stuff</p>
              <p>Lorem ipsum kinda stuff</p>
              {/* Bedrooms {listing.num_bedrms}{" "} */}
              {/* <span> Bathrooms {listing.num_baths}</span> */}
              {/* </p> */}
              {/* {showDelete} */}
              {/* {backToUserListings} */}
              <Link to="/listings/">
                <button className="session-submit">Book it</button>
              </Link>
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

              {/* Bedrooms {listing.num_bedrms}{" "} */}
              {/* <span> Bathrooms {listing.num_baths}</span> */}
              {/* </p> */}
              {/* {showDelete} */}
              {/* {backToUserListings} */}
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
