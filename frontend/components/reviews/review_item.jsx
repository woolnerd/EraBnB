import React from "react";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.review


    this.toggleEdit = true;
  
  }



  componentDidMount() {
    // this.props.fetch
  }

  update(field) {
    //   debugger
    return (e) => {
      this.setState({ [field]: e.target.value }) 
    };
  }

// updateBody(){
//     return (e) => {
//         this.setState({ ['review[body]']: e.target.value }); 
//     }
// }

  handleEditClick(e) {
    //   debugger
    // e.preventDefault();
    // this.toggleEdit
    //   ? this.toggleEdit = false 
    //   : this.toggleEdit = true
    
    if (this.state.toggleEdit === true) {
        this.setState({toggleEdit: false})
    } else {
        this.setState({toggleEdit: true });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteReview(this.state.id)
    this.props.refresh()
  }

  handleEditSubmit(e) {
    e.preventDefault();

    this.props.updateReview(this.state)
    this.setState({toggleEdit: false})    
    this.props.refresh();

  }

  render() {
    const { review, update } = this.props;


    return (
      <div className="review-container">
        <h2>{review.rating}/5 stars</h2>
        <h1>{review.body}</h1>
        <p>{review.author.first_name}</p>

        {this.toggleEdit ? (
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
