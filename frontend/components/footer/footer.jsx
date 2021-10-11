import React from 'react';


export const Footer = () => (
  <div id="footer">
    <div className="footer-container">
      <ul>
        <li className="top-col">About me</li>
        <li>
          {" "}
          <a href="https://github.com/DavidWoolner/" target="_blank">
            Github
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/in/david-woolner/" target="_blank">
            LinkdIn
          </a>
        </li>
        <li>
          {" "}
          <a href="https://angel.co/u/david-woolner" target="_blank">
            AngelList
          </a>
        </li>
        <li>Portfolio site</li>
      </ul>
      <ul>
        <li className="top-col">Contact</li>
        <li>
          <a href="mailto: davidwoolner@gmail.com">DavidWoolner@gmail.com</a>
        </li>
        <li>(347) 882-6981</li>
        <li>NYC Metro Area</li>
      </ul>
      <ul>
        <li className="top-col">Past Projects</li>
        <li>
          {" "}
          <a href="https://nyc-cinemap.herokuapp.com/" target="_blank">
            NYC Cinemap
          </a>
        </li>
        <li>
          {" "}
          <a href="https://come-what-may.herokuapp.com/?#/" target="_blank">
            Come What May
          </a>
        </li>
      </ul>
    </div>
  </div>
);


