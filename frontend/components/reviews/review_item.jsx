import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleEdit: false,
      review: this.props.review,
      errors: this.props.errors.review,
      review_authors: this.props.review_authors
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
    if (this.state.review.body !== "") {
        this.props.updateReview(this.state.review)
        .then(setTimeout(() => this.props.fetchListing(this.props.listingId), 50))
        .then(this.setState({ toggleEdit: false}))
    } else {
      this.props.updateReview(this.state.review)
    }

      // this.props.updateReview(this.state.review)
      //   .then(
      //     setTimeout(() => this.props.fetchListing(this.props.listingId), 50)
      //   )
      //   .then(
      //     this.state.errors.length > 0
      //       ? this.setState({ toggleEdit: true }, () =>
      //           this.props.clearReviewErrors()
      //         )
      //       : this.setState({ toggleEdit: false })
      //   );
    
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors.review.length !== this.props.errors.review.length) {
      this.setState({errors: this.props.errors.review})
    }
  }

  renderErrors() {
    return this.state.errors.length ? (
      <div className="error-container">
        <ul className="form-errors">
          {this.state.errors.map((error, i) => (
            <>
            <div className="error-item">
              <BsFillExclamationCircleFill className="exclamation"/>
              <li key={`error-${i}`}>{error}</li>
            </div>
            </>
          ))}
        </ul>
      </div>
    ) : null;
  }

  render() {
    const {review, review_authors} = this.props
    let reviewDate = new Date(review.created_at.slice(0,10))
    reviewDate = reviewDate.toDateString().split(" ")
    reviewDate = reviewDate[1] + " " + reviewDate[3]
    return (
        <>
        {/* <h2>{review.rating}/5 stars</h2> */}
        {/* <h4>{review.body}</h4> */}
        <p className="author-review">
          {
            Object.values(review_authors).filter(
              (el) => el.id === review.author_id
            )[0].first_name
          }
        </p>
        <p className="review-date">{reviewDate}</p>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque massa placerat duis ultricies. Scelerisque varius morbi
          enim nunc faucibus a. Arcu cursus euismod quis viverra nibh cras
          pulvinar mattis nunc. Nisl vel pretium lectus quam id leo.{" "}
        </h4>

        {this.props.currentUser === review.author_id ? (
          // this.state.toggleEdit 
          true
          ? (
            <>
              <textarea
                placeholder="What did you think?"
                className="review-body"
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
                className="classy-btn"
              >
                Save
              </button>
              <button
                onClick={(e) => this.handleDelete(e)}
                className="classy-btn"
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <button
                onClick={(e) => this.handleEditClick(e)}
                className="classy-btn"
              >
                Edit
              </button>
              <button
                onClick={(e) => this.handleDelete(e)}
                className="classy-btn"
              >
                Delete
              </button>
            </>
          )
        ) : null}
        </>
    );
  }
}

export default ReviewItem;
