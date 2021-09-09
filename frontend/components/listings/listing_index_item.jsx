import React from "react";  
import { Link } from 'react-router-dom';

export const ListingIndexItem = ({listing}) => (

  <div className="listing-item">
      <Link to={`/listings/${listing.id}`}>
      <img
        src="https://media.architecturaldigest.com/photos/5fdba5629542eda0bedf1080/master/w_1280%2Cc_limit/60d85131-b43f-4edb-8051-28c0e6bd377a.jpg"
        alt="listing-photo"
        />
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
