import React from "react";

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.newReview;
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state)
      .then(
        setTimeout(() => this.props.fetchListing(this.props.match.params.listingId), 50 )
      ).then(this.props.clearReviewErrors)
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
    return (
      <div className="review-form-container">
        <div>
          <h4>{this.state.body}</h4>
          <h4>{this.state.rating}</h4>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <textarea onChange={this.update("body")} />
          <select value={this.state.rating} onChange={this.update("rating")}>
            <option disabled value="">
              Choose a rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="session-submit">Submit review</button>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}


export default CreateReviewForm;