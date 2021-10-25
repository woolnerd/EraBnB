import React from "react";
import mapboxgl from "!mapbox-gl";
import { HiOutlineLocationMarker} from "react-icons/hi"

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.map;
    this.state = {
      listings: this.props.listings,
      markers: []
    }
    
  }

  marker(listing) {
    return `<a href="/#/listings/${listing.id}">
      <div>
      <img id="map-photo"src=${listing.photoUrl[0]}/> 
      <h4>
        ${listing.title}
      </h4>
      <p>
      $${listing.price} price/night
      </p>
      </div>
      </a> `;
  }

 createMarkers(listings){
    listings.forEach((listing) => {
      if (this.props.currentUser !== listing.host_id) {
        let newMarker =
          new mapboxgl.Marker({ color: "#ff385c" })
            .setLngLat([listing.longitude, listing.latitude])
            .addTo(this.map)
            .setPopup(
              new mapboxgl.Popup({ closeOnMove : true, focusAferOpen: false}).setHTML(this.marker(listing))
            )
          this.state.markers.push(newMarker)
      }
    })
  }

  removeMarkers(){
    this.state.markers.forEach(marker=> marker.remove())
  }

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";


    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-118.49905, 34.02427],
      zoom: 13,
    }).addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
  }

  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.listings != this.state.listings) {
      this.setState({listings: this.props.listings})
    }
    this.removeMarkers();
    this.createMarkers(this.state.listings);

  }

  render() {

    return <div id="mapContainer"></div>;
  }
}

export default Map