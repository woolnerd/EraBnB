import React from "react";
import mapboxgl from "!mapbox-gl";

class Map extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {

  }
  
  render() {
    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0.1278, 51.5074],
      zoom: 10,
    });
  }
}
