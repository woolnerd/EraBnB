import React from "react";
import mapboxgl from "!mapbox-gl";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.map;
  }

  marker(listing) {
    return `<div> 
      <h4>
        ${listing.title}
      </h4>
      <p>
      ${listing.price} galleons/night
      </p>
      </div>`;
  }
  componentDidMount() {
    // debugger
    this.props.fetchListings();
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";

    // this.map = new mapboxgl.Map({
    //   container: "mapContainer",
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [0.1278, 51.5074],
    //   zoom: 10,
    // });

    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [95.7129, 37.0902],
      // center: [0, 0],
      zoom: 7,
    });
  }

  componentDidUpdate() {
    // debugger
    this.props.listings.forEach((listing) =>
      new mapboxgl.Marker()
        .setLngLat([listing.longitude, listing.latitude])
        .addTo(this.map)
        .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)))
    );

    // new mapboxgl.Marker().setLngLat([95.7129, 37.0902]).addTo(this.map);
    // new mapboxgl.Marker()
    //   .setLngLat([95.7129, 37.0902])
    //   .addTo(this.map);
  }

  render() {
    // if (!this.props.listings) {
    //   return null
    // }
    return <div id="mapContainer"></div>;
  }
}

export default Map