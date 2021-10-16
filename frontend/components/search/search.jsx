import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchListings } from '../../actions/listing_actions';
import { withRouter } from 'react-router-dom';
const qs = require("query-string");


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      check_in: new Date().toISOString().slice(0, 10),
      check_out: new Date().toISOString().slice(0, 10),
      era_theme: "",
    };
  }

  update(field) {
    return (e) => {
      let value = e.target.value;
      this.setState({ [field]: value });
    };
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.location.search = (`address=${this.state.address}&check_in=${this.state.check_in}&check_out=${this.state.check_out}`);
      const query = qs.parse(this.props.location.search)
      this.props.searchListings(query)
      .then(this.props.history.push('/search'))    
      this.setState({address: ""})
  }

  render() {
    return (
      <>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          action="/search"
          method="GET"
        >
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
            // value={this.state.check_in}
            defaultValue={new Date().toISOString().slice(0, 10)}
            min={new Date().toISOString().slice(0, 10)}
            onChange={this.update("check_in")}
          />
          <input
            type="date"
            name="check_out"
            id=""
            // value={this.state.check_out}
            defaultValue={new Date().toISOString().slice(0, 10)}
            min={new Date().toISOString().slice(0, 10)}
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