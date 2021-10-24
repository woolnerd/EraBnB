import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchListing } from "../../actions/listing_actions";

const Splash = (props) => (
  <>
    <Link to="/listings" onClick={(e)=> e.stopPropagation}>
      <main
        id="splash1"
        // style={{ backgroundImage: "url(" + modernSunsetPic + ")" }}
      >
        <div className="flexible-banner">
          <div className="banner-container">
            <h2>Not sure where to go? Perfect.</h2>
            <span>
              <button className="flexible-btn" onClick={(e)=> props.fetchListing(globalThis.flexible).then(
                props.history.push(`/listings/${globalThis.flexible}`)
              )}>I'm flexible</button>
            </span>
          </div>
        </div>
      </main>
    </Link>
    <div className="main-content">
      {/* <h2>Explore decor</h2>
      <div className="grid-container">
        <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>Washington</h3>
            <h4>6.5 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>Philadelphia</h3>
            <h4>3.5 hour drive</h4>
          </span>
        </div> */}
        {/* <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>Boston</h3>
            <h4>3.5hour drive</h4>
          </span>
        </div> */}
        {/* <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/85bd76fe-3c73-4e79-b581-36b9676892f7.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>Arlington</h3>
            <h4>6.5 hour drive</h4>
          </span>
        </div> */}
        {/* <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/71ae2609-6082-4f31-aa20-8629d7fab7d7.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>Portland</h3>
            <h4>5.5 hour drive</h4>
          </span>
        </div> */}
        {/* <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/a161fb95-6875-4aaa-aecd-3a46dead3220.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>North Bergen</h3>
            <h4>1.5 hour drive</h4>
          </span>
        </div> */}
        {/* <div className="grid-thumbs">
          <div
            style={{
              backgroundImage:
                "url(https://a0.muscache.com/im/pictures/560c06e1-a396-4414-9e38-4fbe8e9f04c4.jpg?im_q=medq&im_w=240)",
            }}
          ></div>
          <span>
            <h3>Baltimore</h3>
            <h4>5.5 hour drive</h4>
          </span>
        </div> */}
      {/* </div>  */}
      <h2>Time-bending Era Themes</h2>
      <div className="large-thumbs-container">
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-ch-ed-x-sothebys-palm-springs-185a-1550256871.jpeg)" }}
          ></div>
          <h3>50's Mid-Century</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-eclectic-interior-design-styles-1536x1152.jpeg)" }}
          ></div>
          <h3>60's Eclectic</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-feng-shui-bedroom-ideas-for-home.jpeg)" }}
          ></div>
          <h3>70's Feng Shui</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-27.jpeg)" }}
          ></div>
          <h3>80's Pop</h3>
        </div>
        <div>
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
          <button onClick={()=>props.login()}>Learn more</button>
        </span>
      </div>
    </div>
  </>
);

// const tryHosting = () => (
//   this.state.currentUser ?
//     props.history.push(`/users/${currentUser}`) :
//     ()=>props.login()
// )


const mSTP = (state) => ({
  currentUser: state.session.id
})

const mDTP = (dispatch) => ({
  login: () => dispatch(openModal("login")),
  fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default withRouter(connect(null, mDTP)(Splash));