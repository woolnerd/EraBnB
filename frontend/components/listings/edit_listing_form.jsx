import React from "react";
import mapboxgl from "!mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { BsFillExclamationCircleFill } from "react-icons/bs";


class EditListingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.listing;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
      this.props.fetchListing(this.props.match.params.listingId)
      .then(()=>this.setState({ listing: this.props.listing }))
      
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
    
    this.props.clearListingErrors();
    this.props.clearSessionErrors();

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
      }).catch((err)=> this.props.invalidAddress())
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

handleCancel(){
  this.props.history.goBack();
  this.props.clearListingErrors();
  this.props.clearSessionErrors();
 }

  renderErrors() {
    return this.props.errors.length ? (
      <div className="error-container">
        <ul className="form-errors" id="create-form-errors" >
          {this.props.errors.map((error, i) => (
            <div  className="div-error-key" key={`error-${i}`}>
              <BsFillExclamationCircleFill />
              <li>{error}</li>
            </div>
          ))}
        </ul>
      </div>
    ) : null;
  }

  render() {
    if (!this.state) {
      return null;
    }
    const preview = this.state.photoUrl ? (
      <img className="form-photo-preview" src={this.state.photoUrl} />
    ) : null;
    return (
      <div className="listing-form-container">
        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="listing-form-box">
            <h2>Welcome to erabnb!</h2>
            <p>Please update your listing</p>
              <p className="cancel-btn" onClick={()=>this.handleCancel()}>cancel</p>
            <div className="listing-form">
              <div className="head-form-cont">
                <div className="listing-title">
                  <label>Title</label>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="Snazzy Titles Grab Attention!"
                    required
                  />
                </div>
                <div className="listing-form-descrp">
                  <label>Description</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.update("description")}
                    required
                    placeholder="Tell everyone why your place is amazing"
                  />
                </div>
                <div className="listing-form-theme">
                  <label>Era Theme</label>
                  <select
                    value={this.state.era_theme}
                    onChange={this.update("era_theme")}
                  >
                    <option disabled>--Please choose an Era--</option>
                    <option value="50's">50's</option>
                    <option value="60's">60's</option>
                    <option value="70's">70's</option>
                    <option value="80's">80's</option>
                    <option value="90's">90's</option>
                  </select>
                </div>
                <div className="listing-form-addrs">
                  <label>Address</label>
                  <input
                    type="text"
                    value={this.state.address}
                    onChange={this.update("address")}
                    placeholder="123 Elm St, Burbank, CA 90010"
                    required
                  />
                </div>
              </div>

              <div className="numbers-form">
                <div className="bdrms">
                  <div className="rooms">
                    <label>Number of Bedrooms</label>
                    <input
                      type="text"
                      value={this.state.num_bedrms}
                      onChange={this.update("num_bedrms")}
                      type="number"
                      min="1"
                      max="30"
                      required
                    />
                  </div>
                  <div className="baths">
                    <label>Number of Bathrooms</label>
                    <input
                      value={this.state.num_baths}
                      onChange={this.update("num_baths")}
                      type="number"
                      min="1"
                      max="30"
                      required
                    />
                  </div>
                </div>

                <div className="prices">
                  <div className="price">
                    <label>Price per Night</label>
                    <input
                      type="text"
                      value={this.state.price}
                      onChange={this.update("price")}
                      type="number"
                      min="1"
                      max="10000"
                      required
                      placeholder="$"
                    />
                  </div>
                  <div className="serv">
                    <label>Service Fee</label>
                    <input
                      type="text"
                      value={this.state.service_fee}
                      onChange={this.update("service_fee")}
                      type="number"
                      min="0"
                      max="500"
                      placeholder="$"
                      required
                    />
                  </div>
                  <div className="clean">
                    <label>Clean Fee</label>
                    <input
                      type="text"
                      value={this.state.clean_fee}
                      onChange={this.update("clean_fee")}
                      type="number"
                      min="0"
                      max="250"
                      placeholder="$"
                      required
                    />
                  </div>
                </div>
              </div>
                {this.renderErrors()}
              {/* <img src="" height="200" alt="Image preview..." /> */}
              <div className="listing-form-photo">
                <label>Upload Photos (5 photos minimum)</label>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => this.setState({ photos: e.target.files })}
                  multiple
                />
                {/* {preview} */}
              </div>
              <input
                className="session-submit"
                type="submit"
                value="Update listing"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditListingForm;
