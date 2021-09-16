import React from 'react';


class CreateReviewForm extends React.Component {


    render() {
        <div> 
                <div>
                  <h4>{this.state.body}</h4>
                  <h4>{this.state.rating}</h4>
                </div>

                <form onSubmit={this.handleSubmit}>
                  <textarea onChange={this.update("body")} />
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
                  <button className="session-submit">Submit review</button>
                </form>
        </div>

    }



}