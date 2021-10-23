import React from "react";
import { Redirect } from "react-router-dom";
import { BsFillExclamationCircleFill } from "react-icons/bs";


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
        <ul className="login-form-errors-ul">
          {this.props.errors.session.map((error, i) => (
            <div className="login-form-errors">
              <BsFillExclamationCircleFill/>
              <li key={`error-${i}`}>{error}</li>
            </div>
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
