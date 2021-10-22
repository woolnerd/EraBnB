import React from "react";
import mapboxgl from "!mapbox-gl";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.listing;
    this.map;
  }

  
  marker(listing) {
    return `<a href="/#/listings/${listing.id}">
    <div>
     <img id="map-photo"src=${this.props.listings[0].photoUrl[0]}/> 
      <h4>
        ${listing.address}
        <br/>
      </h4>
      <p>
      ${listing.price} price/night
      </p>
      </div>
      </a>
      `;
  }
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";
  }

  componentDidUpdate() {
    let { listing } = this.props;

    this.map = new mapboxgl.Map({
      container: "mapContainer-booking",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [listing.longitude, listing.latitude],
      zoom: 17,
    });

      new mapboxgl.Marker({ color: "#ff385c" })
        .setLngLat([listing.longitude, listing.latitude])
        .addTo(this.map)
        .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)))
    
    // this.props.listings.forEach((listing) =>
    //   new mapboxgl.Marker()
    //     .setLngLat([listing.longitude, listing.latitude])
    //     .addTo(this.map)
    //     .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)))
    // );
  }

  render() {
    return <div id="mapContainer-booking"></div>;
  }
}

export default Map;
