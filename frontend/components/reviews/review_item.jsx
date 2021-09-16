import React from "react";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleEdit: false, ...this.props.review };
  }

  handleEditClick(e) {
    e.preventDefault();
    this.state.toggleEdit
      ? this.setState({ toggleEdit: false })
      : this.setState({ toggleEdit: true });
  }

  handleEditSubmit(e) {
    e.preventDefault();

    this.props
      .updateReview(this.state)
      .then(this.props.fetchListing(this.state.listing_id));
  }

  handleDelete(e) {
    e.preventDefault();
    const listingId = this.state.listing_id;
    this.props
      .deleteReview(this.state.id)
      .then(this.props.fetchListing(listingId));
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
            <textarea onChange={()=>update("body")} value={this.state.body} />
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

        <button className="session-submit">Delete</button>
      </div>
    );
  }
}

export default ReviewItem;
