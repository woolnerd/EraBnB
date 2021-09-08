import React from "react";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.listing;
  }

  componentDidMount() {}

  handleChange(field) {
    let value = e.target.value 
    if (field === "price" || field === "num_bdrms") {
      value = parseInt(e.target.value)
    }
    this.setState({[field]: value})
  }

  handleSubmit(e) {
    e.preventDefault()

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";
    const geocoder = mbxGeocoding({
      accessToken: mapboxgl.accessToken
    })

    geocoder.forwardGeocode({
      query: `${this.state.address}`,
      limit: 1
    }).send().then(res=>{
      this.setState({
        longitude: res.body.features[0].center[0],
        latitude: res.body.features[0].center[1]
      })
    })
    this.setState({host_id: this.props.session.id})
  }

  render() {
    return (
      <div className="listing-form-container">
        <form onSubmit={this.handleSubmit} className="listing-form-box">
          <h2>Welcome to erabnb!</h2>
          <br />
          <p>Please {this.props.formType}</p>
          {this.renderErrors()}
          <div className="listing-form">
            <div className="listing-email">
              <label>Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="listing-input"
                // placeholder="title"
              />
            </div>
            <div className="listing-password">
              <label>Description</label>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
                className="listing-input"
                // placeholder="description"
              />
            </div>
            <div className="listing-era-theme">
              <label>Era Theme</label>
              <input
                type="text"
                value={this.state.era_theme}
                onChange={this.update("era_theme")}
                className="listing-input"
                // placeholder="First Name"
              />
            </div>
            <div className="listing-address">
              <label>Address</label>
              <input
                type="text"
                value={this.state.address}
                onChange={this.update("address")}
                className="listing-input"
                // placeholder="Address"
              />
            </div>
            <div className="listing-num-bdrms">
              <label>Number of Bedrooms</label>
              <input
                type="text"
                value={this.state.num_bedrms}
                onChange={this.update("birthdate")}
                className="listing-input"
                // placeholder="YYYY-MM-DD"
              />
            </div>
            <div className="listing-num-baths">
              <label>Number of Bathrooms</label>
              <input
                value={this.state.num_baths}
                onChange={this.update("bio")}
                className="listing-input"
                // placeholder="Tell us about yourself! (If you want to.)"
              />
            </div>
            <div className="listing-price">
              <label>Price</label>
              <textarea
                value={this.state.price}
                onChange={this.update("bio")}
                className="listing-input"
                // placeholder="Tell us about yourself! (If you want to.)"
              />
            </div>
            <div className="listing-num-baths">
              <label>Number of Bathrooms</label>
              <textarea
                value={this.state.num_baths}
                onChange={this.update("bio")}
                className="listing-input"
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