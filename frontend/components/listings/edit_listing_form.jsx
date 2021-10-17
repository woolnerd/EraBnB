import React from "react";
import mapboxgl from "!mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

class EditListingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.listing;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
      this.props.fetchListing(this.state.id)
  }

  update(field) {
    return (e) => {
      let value = e.target.value;
      this.setState({ [field]: value });
    };
  }

  //for file preview of selected photos
  // handleFile(e) {
  //   e.preventDefault()
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({ photoFile: file, photoUrl: fileReader.result });
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //       }
  // }

  handleSubmit(e) {
    e.preventDefault();

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrdGFlbmh1bzFsNDUyd3BsYzI1ZGp3ZnUifQ.TTV5klimEC0SfR3MZDEauA";
    const geocoder = mbxGeocoding({
      accessToken: mapboxgl.accessToken,
    });
    geocoder
      .forwardGeocode({
        query: `${this.state.address}`,
        limit: 1,
      })
      .send()
      .then((res) => {
        this.setState({
          longitude: res.body.features[0].center[0],
          latitude: res.body.features[0].center[1],
        });

        const formData = new FormData();
        formData.append("listing[title]", this.state.title);
        formData.append("listing[description]", this.state.description);
        formData.append("listing[era_theme]", this.state.era_theme);
        formData.append("listing[address]", this.state.address);
        formData.append("listing[longitude]", this.state.longitude);
        formData.append("listing[latitude]", this.state.latitude);
        formData.append("listing[num_bedrms]", this.state.num_bedrms);
        formData.append("listing[num_baths]", this.state.num_baths);
        formData.append("listing[price]", this.state.price);
        formData.append("listing[clean_fee]", this.state.clean_fee);
        formData.append("listing[service_fee]", this.state.service_fee);
        formData.append("listing[host_id]", this.state.host_id);

        for (let i = 0; i < this.state.photos.length; i++) {
          formData.append("listing[photos][]", this.state.photos[i]);
        }
        
        this.props
          .updateListing(formData, this.state.id)
          .then((res) =>
            this.props.history.push(`/listings/${res.listing.id}`)
          );
      });
  }

  onPhotoInput(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  renderErrors() {
    return this.props.errors.length ? (
      <div className="error-container">
        <ul className="form-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    ) : null;
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img className="form-photo-preview" src={this.state.photoUrl} />
    ) : null;
    return (
      <div className="listing-form-container">
        <form onSubmit={this.handleSubmit} className="listing-form-box">
          <h2>Welcome to erabnb!</h2>
          <br />
          <p>Please {this.props.formType}</p>
          <div className="listing-form">
            <div className="listing-email">
              <label>Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Snazzy Titles Grab Attention!"
                required
              />
            </div>
            <div className="listing-form">
              <label>Description</label>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
                required
                placeholder="Tell everyone why your place is amazing"
              />
            </div>
            <div className="listing-form">
              <label>Era Theme</label>
              <input
                type="text"
                value={this.state.era_theme}
                onChange={this.update("era_theme")}
                required
              />
            </div>
            <div className="listing-form">
              <label>Address</label>
              <input
                type="text"
                value={this.state.address}
                onChange={this.update("address")}
                placeholder="123 Elm St, Burbank, CA 90010"
                required
              />
            </div>
            <div className="listing-form">
              <label>Number of Bedrooms</label>
              <input
                type="text"
                value={this.state.num_bedrms}
                onChange={this.update("num_bedrms")}
                type="number"
                min="0"
                max="30"
                required
              />
            </div>
            <div className="listing-form">
              <label>Number of Bathrooms</label>
              <input
                value={this.state.num_baths}
                onChange={this.update("num_baths")}
                type="number"
                min="0"
                max="30"
                required
              />
            </div>
            <div className="listing-form">
              <label>Price</label>
              <input
                type="text"
                value={this.state.price}
                onChange={this.update("price")}
                type="number"
                min="1"
                max="10000"
                required
              />
            </div>
            <div className="listing-form">
              <label>Service Fee</label>
              <input
                type="text"
                value={this.state.service_fee}
                onChange={this.update("service_fee")}
                type="number"
                min="0"
                max="500"
                required
              />
            </div>
            <div className="listing-form">
              <label>Clean Fee</label>
              <input
                type="text"
                value={this.state.clean_fee}
                onChange={this.update("clean_fee")}
                type="number"
                min="0"
                max="250"
                required
              />
            </div>
            {/* <img src="" height="200" alt="Image preview..." /> */}
            <div className="listing-form">
              <label>Upload Photo</label>
              <input
                type="file"
                onChange={(e) => this.setState({ photos: e.target.files })}
                multiple
              />
              {preview}
            </div>
            {this.renderErrors()}
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

export default EditListingForm;
