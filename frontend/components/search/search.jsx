import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
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
    //   this.props.location.search =  this.state.address
      this.props.searchListings(this.state)
      this.props.history.push(`/listings/1000`)
      this.setState({address: ""})
  }

  render() {
    return (
      <>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="text" onChange={this.update('address')} value={this.state.address} placeholder="Where are you going?"/>
          <button className="search-btn">Start your search</button>
        </form>
      </>
    );
  }
}

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
  searchListings: (query) => dispatch(fetchListings(query))
});


export default withRouter(connect(mSTP, mDTP)(Search));