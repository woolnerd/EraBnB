import React from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa';
class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.state = {
      revealDropdown: false,
    }
  }

  handleButtonClick = () => {
    this.setState(({ revealDropdown }) => (
      {revealDropdown: !revealDropdown}
    ));
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
          {/* <img className="hamburger-btn" src={menu} /> */}
          <GiHamburgerMenu className="hamburger-btn" />
          <FaUserCircle className="profile-icon" />
          {/* <img className="profile-icon" src={userCircle} /> */}
        </div>
        {this.state.revealDropdown && (
          <>
            <div className="menu-content">
              {this.props.currentUser ? (
                <div>
                  <Link to={`/users/${this.props.currentUser.id}`}>
                    <li className="profile-link">Profile</li>
                  </Link>
                  <Link to="/">
                    <li onClick={this.props.logout}>Log Out</li>
                  </Link>
                </div>
              ) : (
                <>
                  <li onClick={this.props.login}>Log in</li>
                  <li onClick={this.props.signUp}>Sign up</li>
                  <li onClick={this.props.loginDemoUser}>Demo user</li>
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
