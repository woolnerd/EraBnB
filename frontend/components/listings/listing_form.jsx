import React from "react";
import mapboxgl from "!mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.listing;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
  }

  update(field) {
    return e => { 
      let value = e.target.value 
      if (
        field === "price" ||
        field === "num_bedrms" ||
        field === "num_baths" ||
        field === "clean_fee" || 
        field === "service_fee"
      ) {
        value = parseInt(e.target.value);
      }
      this.setState({[field]: value})

    }
  }

  handleSubmit(e) {
    e.preventDefault()

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";
    const geocoder = mbxGeocoding({
      accessToken: mapboxgl.accessToken
    })

    geocoder.forwardGeocode({
      query: `${this.state.address}`,
      limit: 1
    }).send().then(res=>{
      console.log(res.body.features[0].center[0]);
      console.log(res.body.features[0].center[1]);

      this.setState({
        longitude: res.body.features[0].center[0],
        latitude: res.body.features[0].center[1]
      })
    })

    this.props.action(this.state).then()
  }

  render() {
    return (
      <div className="listing-form-container">
        <form onSubmit={this.handleSubmit} className="listing-form-box">
          <h2>Welcome to erabnb!</h2>
          <br />
          <p>Please {this.props.formType}</p>
          {/* {this.renderErrors()} */}
          <div className="listing-form">
            <div className="listing-email">
              <label>Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                // placeholder="title"
              />
            </div>
            <div className="listing-form">
              <label>Description</label>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
                // placeholder="description"
              />
            </div>
            <div className="listing-form">
              <label>Era Theme</label>
              <input
                type="text"
                value={this.state.era_theme}
                onChange={this.update("era_theme")}
                // placeholder="First Name"
              />
            </div>
            <div className="listing-form">
              <label>Address</label>
              <input
                type="text"
                value={this.state.address}
                onChange={this.update("address")}
                // placeholder="Address"
              />
            </div>
            <div className="listing-form">
              <label>Number of Bedrooms</label>
              <input
                type="text"
                value={this.state.num_bedrms}
                onChange={this.update("num_bedrms")}
                // placeholder="YYYY-MM-DD"
              />
            </div>
            <div className="listing-form">
              <label>Number of Bathrooms</label>
              <input
                value={this.state.num_baths}
                onChange={this.update("num_baths")}
                // placeholder="Tell us about yourself! (If you want to.)"
              />
            </div>
            <div className="listing-form">
              <label>Price</label>
              <input
                type="text"
                value={this.state.price}
                onChange={this.update("price")}
                // placeholder="Tell us about yourself! (If you want to.)"
              />
            </div>
            <div className="listing-form">
              <label>Service Fee</label>
              <input
                type="text"
                value={this.state.service_fee}
                onChange={this.update("service_fee")}
                // placeholder="Tell us about yourself! (If you want to.)"
              />
            </div>
            <div className="listing-form">
              <label>Clean Fee</label>
              <input
                type="text"
                value={this.state.clean_fee}
                onChange={this.update("clean_fee")}
                // placeholder="Tell us about yourself! (If you want to.)"
              />
            </div>
            <div className="listing-form">
              <label>Upload Photo</label>
              <input
                type="file"
                // value={this.state.photo}
                // onChange={this.update("bio")}
                // placeholder="Tell us about yourself! (If you want to.)"
              />
            </div>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ListingForm;