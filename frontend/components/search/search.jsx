import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchListings } from '../../actions/listing_actions';
import { withRouter } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import { addDays} from "date-fns";

const qs = require("query-string");


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      check_in: new Date().toISOString().slice(0, 10),
      check_out: new Date().toISOString().slice(0, 10),
      era_theme: ""
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
      this.props.location.search = (`address=${this.state.address}&check_in=${this.state.check_in}&check_out=${this.state.check_out}&era_theme=${this.state.era_theme}`);
      const query = qs.parse(this.props.location.search)
      this.props.searchListings(query)
      .then(this.props.history.push('/listings'))    
      this.setState({address: ""})
  }

  render() {
    return (
      <>
        <div className="search-container">
          <form
            onSubmit={(e) => this.handleSubmit(e)}
            action="/search"
            method="GET"
          >
            <div className="location-search">
              <h4>Location</h4>
              <input
                type="text"
                onChange={this.update("address")}
                value={this.state.address}
                placeholder="Where are you going?"
              />
            </div>
            <div className="divider"></div>
            <div className="check-in-search">
              <h4>Check in</h4>
              <input
                type="date"
                name="check_in"
                defaultValue={new Date().toISOString().slice(0, 10)}
                min={new Date().toISOString().slice(0, 10)}
                onChange={this.update("check_in")}
              />
            </div>
            <div className="divider"></div>
            <div className="check-out-search">
              <h4>Check out</h4>
              <input
                type="date"
                name="check_out"
                defaultValue={tmrw()}
                min={tmrw()}
                onChange={this.update("check_out")}
              />
            </div>
            <div className="divider"></div>
            <div className="era-search">
                  <label className="era-label-search">Era Theme</label>
                  <select
                    value={this.state.era_theme}
                    onChange={this.update("era_theme")}
                  >
                    <option value="">-- Era --</option>
                    <option value="50's">50's</option>
                    <option value="60's">60's</option>
                    <option value="70's">70's</option>
                    <option value="80's">80's</option>
                    <option value="90's">90's</option>
                  </select>
                </div>
            <div className="search-btn-cont">
              <button className="search-btn">
                <BiSearch />
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const tmrw = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const result = addDays(new Date(year, month, day), 7);
  return result.toISOString().slice(0, 10);
}

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
  searchListings: (query) => dispatch(fetchSearchListings(query))
});


export default withRouter(connect(mSTP, mDTP)(Search));