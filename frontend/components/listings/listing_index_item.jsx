import React from "react";  
import { Link } from 'react-router-dom';

export const ListingIndexItem = ({listing}) => (

  <div className="listing-item">
      <Link to={`/listings/${listing.id}`}>
        <img src={listing.photoUrl[0]} alt="" />
        </Link>
      <div className="listing-info">
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <p>{listing.address}</p>
        <p>${listing.price}/night</p>
        <p>Bedrooms {listing.num_bedrms} <span> Bathrooms {listing.num_baths}</span></p>
      </div>
    </div>
)

// 
