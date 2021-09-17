import React from "react";
import mapboxgl from "!mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.listing 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => { 
      let value = e.target.value 
      // make into a switch 
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
     

      this.setState({
        longitude: res.body.features[0].center[0],
        latitude: res.body.features[0].center[1]
      })

      const formData = new FormData();
      formData.append('listing[title]', this.state.title)
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
        .action(formData)
        .then((res) =>
          this.props.history.push(`/listings/${res.listing.id}`)
        );
    })

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

  
  render() {
    const preview = this.state.photoUrl ? <img className="form-photo-preview" src={this.state.photoUrl} /> : null;
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
              />
            </div>
            <div className="listing-form">
              <label>Description</label>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
              />
            </div>
            <div className="listing-form">
              <label>Era Theme</label>
              <input
                type="text"
                value={this.state.era_theme}
                onChange={this.update("era_theme")}
              />
            </div>
            <div className="listing-form">
              <label>Address</label>
              <input
                type="text"
                value={this.state.address}
                onChange={this.update("address")}
              />
            </div>
            <div className="listing-form">
              <label>Number of Bedrooms</label>
              <input
                type="text"
                value={this.state.num_bedrms}
                onChange={this.update("num_bedrms")}
              />
            </div>
            <div className="listing-form">
              <label>Number of Bathrooms</label>
              <input
                value={this.state.num_baths}
                onChange={this.update("num_baths")}
              />
            </div>
            <div className="listing-form">
              <label>Price</label>
              <input
                type="text"
                value={this.state.price}
                onChange={this.update("price")}
              />
            </div>
            <div className="listing-form">
              <label>Service Fee</label>
              <input
                type="text"
                value={this.state.service_fee}
                onChange={this.update("service_fee")}
              />
            </div>
            <div className="listing-form">
              <label>Clean Fee</label>
              <input
                type="text"
                value={this.state.clean_fee}
                onChange={this.update("clean_fee")}
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