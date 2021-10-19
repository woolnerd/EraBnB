import React from "react";
import { Link } from "react-router-dom";

class GuestDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.state = {
      revealDropdown: false,
    };
  }

  handleButtonClick = () => {
    this.setState(({ revealDropdown }) => ({
      revealDropdown: !revealDropdown,
    }));
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
        <div className="menu-container">
          <img className="hamburger-btn" src={menu} />
          <img className="profile-icon" src={userCircle} />
        </div>
        {this.state.revealDropdown && (
          <>
            <div className="menu-content">
              {this.props.currentUser ? (
                <div>
                  <Link to="#">
                    <li className="profile-link">Profile</li>
                  </Link>
                  <Link to="/">
                    <li>Log Out</li>
                  </Link>
                </div>
              ) : (
                <>
                  <li >Log in</li>
                  <li >Sign up</li>
                  <li >Demo user</li>
                </>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Menu;
