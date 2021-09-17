import React from "react";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleEdit: false, review: this.props.review}

  }


  update(field) {
    const review = {...this.state.review}
    return (e) => {
    review[field] = e.target.value;
      this.setState({ review }) 
    };
  }

  handleEditClick(e) {
    this.state.toggleEdit
      ? this.setState({toggleEdit:false}) 
      : this.setState({toggleEdit:true})
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteReview(this.state.review.id)
    this.props.refresh()
  }

  handleEditSubmit(e) {
    e.preventDefault();

    this.props.updateReview(this.state.review)
    this.setState({toggleEdit: false})    
    this.props.refresh();

  }

  render() {
    const { review } = this.props;


    return (
      <div className="review-container">
        <h2>{review.rating}/5 stars</h2>
        <h1>{review.body}</h1>
        <p>{review.author.first_name}</p>

        {this.state.toggleEdit ? (
          <>
            <textarea
              onChange={this.update("body")}
              value={this.state.review.body}
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
