import React from "react";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleEdit: false, ...this.props.review };
  }

  componentDidMount() {
    console.log(this.state);
    this.props.fetchReview(this.state.id);
  }

  update(field) {
    console.log(field);
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleEditClick(e) {
    e.preventDefault();
    console.log(e);
    this.state.toggleEdit
      ? this.setState({ toggleEdit: false })
      : this.setState({ toggleEdit: true });
    // this.props.fetchReview()
  }

  handleDelete(e) {
    e.preventDefault();
    const listingId = this.state.listing_id;
    this.props
      .deleteReview(this.state.id)
      .then(this.props.fetchListing(listingId));
  }

  handleEditSubmit(e) {
    e.preventDefault();

    this.props
      .updateReview(this.state)
      .then(this.props.fetchListing(this.state.listing_id));
  }

  render() {
    const { review, update } = this.props;

    return (
      <div className="review-container">
        <h2>{review.rating}/5 stars</h2>
        <h1>{review.body}</h1>
        <p>{review.author.first_name}</p>

        {this.state.toggleEdit ? (
          <>
            <textarea
              onChange={this.update("body")}
              value={this.state.body}
            />
            <select
              value={this.state.rating}
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
            <button
              onClick={(e) => this.handleEditSubmit(e)}
              className="session-submit"
            >
              Save edit
            </button>
          </>
        ) : null}

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
      </div>
    );
  }
}

export default ReviewItem;
