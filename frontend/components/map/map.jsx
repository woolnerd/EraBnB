import React from "react";
import mapboxgl from "!mapbox-gl";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.map;
  }

  marker(listing) {
    return `<div>
      <img id="map-photo"src=${listing.photoUrl[0]}/> 
      <h4>
        ${listing.title}
      </h4>
      <p>
      ${listing.price} price/night
      </p>
      </div>`;
  }
  componentDidMount() {
    this.props.fetchListings();
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";


    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.982, 40.769],
      zoom: 12,
    });
  }

  componentDidUpdate() {
    this.props.listings.forEach((listing) =>
      new mapboxgl.Marker()
        .setLngLat([listing.longitude, listing.latitude])
        .addTo(this.map)
        .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)))
    );

  }

  render() {

    return <div id="mapContainer"></div>;
  }
}

export default Map