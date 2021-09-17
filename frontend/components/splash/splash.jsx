import React from "react";
import { Link } from 'react-router-dom';

export const Splash = () => (
  <>
    <Link to="/listings">
      <main
        id="splash1"
        style={{ backgroundImage: "url(" + modernSunsetPic + ")" }}
      >
        <div className="flexible-banner">
          <div className="banner-container">
            <h2>Not sure where to go? Perfect.</h2>
            <span>
              <button className="flexible-btn">I'm flexible</button>
            </span>
          </div>
        </div>
      </main>
    </Link>
    <div className="main-content">
      <h2>Explore nearby</h2>
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
        </div>
        <div className="grid-thumbs">
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
        </div>
        <div className="grid-thumbs">
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
        </div>
        <div className="grid-thumbs">
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
        </div>
        <div className="grid-thumbs">
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
        </div>
        <div className="grid-thumbs">
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
        </div>
      </div>
      <h2>Live anywhere</h2>
      <div className="large-thumbs-container">
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + hugoSousaPic + ")" }}
          ></div>
          <h3>Outdoor getaways</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + homeInteriorPic + ")" }}
          ></div>
          <h3>Unique stays</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + relaxBeachPlacePic + ")" }}
          ></div>
          <h3>Entire homes</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + orlovaMariaPic + ")" }}
          ></div>
          <h3>Pets allowed</h3>
        </div>
      </div>
      <div
        className="lower-third"
        style={{ backgroundImage: "url(" + kitchenInteriorPic + ")" }}
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
          <button>Learn more</button>
        </span>
      </div>
    </div>
  </>
);

