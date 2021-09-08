import React from 'react';
import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

const Map = ({listings}) => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";
    

    const geocoder = mbxGeocoding({
    accessToken: mapboxgl.accessToken,
    });

    let coordListings = listings.map( listing => 
        geocoder.forwardGeocode({
            query: `${listing.address}`,
            limit: 1
        }).send()
        .then( res => {
            const match = res.body;
            const coordinates = match.features[0].geometry.coordinates;
            const placeName = match.features[0].place_name;
            const center = match.features[0].center 

            return {
                type: 'feature',
                center,
                geometry: {
                    type: "Point",
                    coordinates,
                },
                properties: {
                    description: placeName
                }
            }
        }
, []));



    useEffect(() => {
        let map = new mapboxgl.Map({
          container: "mapContainer",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [0.1278, 51.5074],
          zoom: 10,

        });

        new mapboxgl.Marker()
        .setLngLat([0.1278, 51.5074])
        .addTo(map)
      }, []);

    return <div id="mapContainer" height="750px" width="500px"></div>;

}

export default Map;