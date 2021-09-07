import React from 'react';
import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';

const Map = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA';

    useEffect(() => {
        new mapboxgl.Map({
          container: "mapContainer",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [0.1278, 51.5074],
          zoom: 10,
        });
      }, []);

    return <div id="mapContainer" height="750px" width="500px"></div>;

}

export default Map;