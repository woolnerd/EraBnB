import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchListings } from '../../actions/listing_actions';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        address: "",
        check_in: "",
        check_out: "",
        era_theme: ""
    }
  }

  update(field) {
    return (e) => {
      let value = e.target.value;
      this.setState({ [field]: value });
    };
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.history.push(`/listings/search?address=${this.state.address}&check_in=${this.state.check_in}&check_out=${this.state.check_out}`);

      this.setState({address: ""})
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            onChange={this.update("address")}
            value={this.state.address}
            placeholder="Where are you going?"
          />
          <input
            type="date"
            name="check_in"
            id=""
            value={this.state.check_in}
            onChange={this.update("check_in")}
          />
          <input
            type="date"
            name="check_out"
            id=""
            value={this.state.check_out}
            onChange={this.update("check_out")}
          />
          <button className="search-btn">Start your search</button>
        </form>
      </>
    );
  }
}

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
  searchListings: (query) => dispatch(fetchSearchListings(query))
});


export default withRouter(connect(mSTP, mDTP)(Search));