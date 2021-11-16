import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchListing, fetchSearchListings } from "../../actions/listing_actions";
const qs = require("query-string");


class Splash extends React.Component {
  constructor(props){
    super(props);

  }

  handleSubmit(era_theme){
      this.props.location.search = (`address=${""}&check_in=${new Date()}&check_out=${new Date()}&era_theme=${era_theme}`);
      const query = qs.parse(this.props.location.search)
      this.props.fetchEraListings(query)
      .then(this.props.history.push('/search'))    
  }

  handleHost(){
    if (this.props.currentUser) {
      this.props.history.push(`/users/${this.props.currentUser}`)
    } else {
      this.props.login()
    }
  }


render(){
  return (
    <>
    <Link to="/listings">
      <main
        id="splash1"
      >
        <div className="flexible-banner">
          <div className="banner-container">
            <h2>Not sure where to go? Perfect.</h2>
            <span>
              <button className="flexible-btn" 
             
              >I'm flexible
              </button>
            </span>
          </div>
        </div>
      </main>
    </Link>
    <div className="main-content">
      <h2>Time-bending Era Themes</h2>
      <div className="large-thumbs-container">
        <div  onClick={()=>this.handleSubmit("50's")}>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-ch-ed-x-sothebys-palm-springs-185a-1550256871.jpeg)" }}
         ></div>
          <h3>50's Mid-Century</h3>
        </div>
        <div  onClick={()=>this.handleSubmit("60's")}>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-eclectic-interior-design-styles-1536x1152.jpeg)" }}
          ></div>
          <h3>60's Eclectic</h3>
        </div>
        <div  onClick={()=>this.handleSubmit("70's")}>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-feng-shui-bedroom-ideas-for-home.jpeg)" }}
          ></div>
          <h3>70's Feng Shui</h3>
        </div>
        <div  onClick={()=>this.handleSubmit("80's")}>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-27.jpeg)" }}
          ></div>
          <h3>80's Pop</h3>
        </div>
        <div  onClick={()=>this.handleSubmit("90's")}>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_2-5ee820f3147d2.jpeg)" }}
          ></div>
          <h3>90's Galore</h3>
        </div>
      </div>
      <div
        className="lower-third"
        style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50_10-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-10.jpeg)" }}
      >
        <span>
          <h3>Try Hosting</h3>
        </span>
        <span>
          <p>
            Earn extra income and unlock new opportunities by sharing your
            space.
          </p>
        </span>
        <span>
          <button onClick={()=>this.handleHost()}>Learn more</button>
        </span>
      </div>
    </div>
  </>

    )
  }

  

}


const mSTP = (state) => ({
  currentUser: state.session.id
})

const mDTP = (dispatch) => ({
  login: () => dispatch(openModal("login")),
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  fetchEraListings: (era) => dispatch(fetchSearchListings(era))
});

export default withRouter(connect(mSTP, mDTP)(Splash));