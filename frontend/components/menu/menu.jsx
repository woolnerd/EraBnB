import React from "react";
import { Link } from "react-router-dom";

import SignUpFormContainer from "../session_form/signup_form_container";
import LoginFormContainer from "../session_form/login_form_container";
import { AuthRoute } from "../../util/route_util";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.state = {
      revealDropdown: false,
      // currentUser: this.props.currentUser,
    };
  }

  handleButtonClick = () => {
    this.setState(({ revealDropdown }) => {
      return {
        revealDropdown: !revealDropdown,
      };
    });
  };

  handleClickOutside = (e) => {
    if (this.menu.current && !this.menu.current.contains(e.target)) {
      this.setState({
        revealDropdown: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div onClick={this.handleButtonClick} className="menu" ref={this.menu}>
        {/* <button >Menu</button> */}
        <img
          className="hamburger-btn"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAOElEQVRIie3TsQkAMAwDwSf7b+XBnCqQ1hC7yR+oFioEkhoEkM2JU7YGBt1yuE+/807SM95JUskGsVVPTkFzAfwAAAAASUVORK5CYII="
        />
        <img className="profile-icon" src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png" />
        {this.state.revealDropdown && (
          <>
            <div className="menu-content">
              {this.props.currentUser ? (
                <div>
                  <li onClick={this.props.logout}>Log Out</li>
                </div>
              ) : (
                <>
                  <li onClick={this.props.login}>Log In</li>
                  <li onClick={this.props.signUp}>Sign Up</li>
                </>
              )}
            </div>
            <div onClick={this.hideDropdown} className="click-bg"></div>
          </>
        )}

        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
                        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      </div>
    );
  }
}

export default Menu;
