import React from "react";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleEdit: false,
      review: this.props.review,
      errors: this.props.errors.review
    };
  }

  update(field) {
    const review = { ...this.state.review };
    return (e) => {
      review[field] = e.target.value;
      this.setState({ review });
    };
  }

  handleEditClick(e) {
    this.state.toggleEdit
      ? this.setState({ toggleEdit: false })
      : this.setState({ toggleEdit: true });
    this.props.clearReviewErrors();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteReview(this.state.review.id)
      .then(
        setTimeout(() => this.props.fetchListing(this.props.listingId), 50)
      );
  }

  handleEditSubmit(e) {
    e.preventDefault();
    this.props
      .updateReview(this.state.review)
      .then(setTimeout(() => this.props.fetchListing(this.props.listingId), 50))
      .then(
        this.state.errors.length
          ? this.setState({ toggleEdit: false })
          : this.setState({ toggleEdit: true }, () => this.props.clearReviewErrors())
      )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors.review.length !== this.props.errors.review.length) {
      this.setState({errors: this.props.errors.review})
    }
  }

  renderErrors() {
    return this.state.errors.length ? (
      <div className="error-container">
        <ul className="form-errors">
          {this.state.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    ) : null;
  }

  render() {
    const { review } = this.props;
    return (
      <div className="review-container">
        <h2>{review.rating}/5 stars</h2>
        <h1>{review.body}</h1>
        <p>{review.author.first_name}</p>

        {this.props.currentUser === review.author.id ? 
        
        this.state.toggleEdit ? (
          <>
            <h4>{this.state.review.body}</h4>
            <textarea
              onChange={this.update("body")}
              value={this.state.review.body}
              required
            />
            <select
              value={this.state.review.rating}
              onChange={this.update("rating")}
            >
              <option disabled value="">
                Choose a rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {this.renderErrors()}
            <button
              onClick={(e) => this.handleEditSubmit(e)}
              className="session-submit"
            >
              Save edit
            </button>
                    <button
          onClick={(e) => this.handleDelete(e)}
          className="session-submit"
        >
          Delete
        </button>
          </>
        ) : (
          <>
            <button
              onClick={(e) => this.handleEditClick(e)}
              className="session-submit"
            >
              Edit
            </button>
                    <button
            onClick={(e) => this.handleDelete(e)}
            className="session-submit"
          >
            Delete
          </button>
        </>
        )
        : null
      
      }

      </div>
    );
  }
}

export default ReviewItem;
