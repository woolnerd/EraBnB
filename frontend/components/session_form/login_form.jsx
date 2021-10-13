import React from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.login(user).then(this.props.closeModal);
  }

  handleDemoUser(e) {
    e.preventDefault()
    this.props.loginDemoUser().then(this.props.closeModal());
  }

  renderErrors() {
    return this.props.errors.session.length ? (
      <div className="error-container">
        <ul className="form-errors">
          {this.props.errors.session.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    ) : null;
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Welcome to erabnb!</h2>
          <br />
          <p>Please {this.props.formType}</p>
          {/* <FontAwesomeIcon icon="fa-solid fa-check-square" />{" "} */}
          {/* <div className="login-form"> */}
          <div className="login-email">
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
            />
          </div>
          <div className="login-password">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
            />
          </div>
          {this.renderErrors()}
          <input
            className="session-submit"
            type="submit"
            value={this.props.formType}
          />
          {/* </div> */}
          <input
            className="session-submit"
            id="login-demouser"
            type="button"
            value="Demo user"
            onClick={this.handleDemoUser}
          />
        </form>
      </div>
    );
  }
}

export default LoginForm;
