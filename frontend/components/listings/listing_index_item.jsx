import React from "react";  
import { Link } from 'react-router-dom';

export const ListingIndexItem = ({ listing}) => (
  <div className="listing-item">
    <Link to={`/listings/${listing.id}`}>
      <img src={listing.photoUrl[0]} alt="" />
    </Link>
    <div className="listing-info">
      <span>
        <p>Entire unit in Brooklyn</p>
        <h3>{listing.title}</h3>
      </span>
      <p>{listing.description}</p>
      <p>{listing.address}</p>
      <p>
        Bedrooms {listing.num_bedrms}{" "}
        <span> Bathrooms {listing.num_baths}</span>
      </p>
      <div className="rating-price-cont">
        <span className="item-price">
          <p className="special">${listing.price}/night</p>
        </span>
        <span className="avg-rating">
          {listing.reviews.length && listing.reviews.rating ? (
            <p className="special">
              star {getAvgRating(listing.reviews)} ({listing.reviews.length})
            </p>
          ) : (
            <p className="special">
              No reviews yet!
            </p>
          )}
        </span>
      </div>
    </div>
  </div>
);

export const getAvgRating = (reviews) => {

  if (reviews.length){

    return (
  
      reviews.map((review) => review.rating)
             .reduce((acc, curVal) => acc + curVal) 
             / reviews.length 
      )
  }
  }


