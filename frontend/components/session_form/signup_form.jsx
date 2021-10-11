import React from "react";
import { closeModal } from "../../actions/modal_actions";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthdate: "",
      bio: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this)
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
    this.props.signup(user).then(this.props.closeModal);
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props.loginDemoUser().then(this.props.closeModal);
  }

  renderErrors() {
    return (
      this.props.errors.length ? 
      <div className="error-container">
        <ul className="form-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div> : null 
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h2>Welcome to erabnb!</h2>
          <br />
          <p>Please {this.props.formType}</p>

          {/* <div className="signup-form"> */}
          <div className="signup-email">
            {/* <label>Email</label> */}
            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              className="signup-input"
              placeholder="Email"
              valid="email"
              required
            />
          </div>
          <div className="signup-password">
            <label> Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="signup-input"
              // placeholder="Password"
              min="6"
              required
            />
          </div>
          <div className="signup-first-name">
            <label>First Name</label>
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="signup-input"
              required
              // placeholder="First Name"
            />
          </div>
          <div className="signup-last-name">
            <label>Last Name</label>
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="signup-input"
              required
              // placeholder="Last Name"
            />
          </div>
          <div className="signup-form-dob">
            <label>Date of Birth</label>
            <input
              type="text"
              value={this.state.birthdate}
              onChange={this.update("birthdate")}
              className="signup-input"
              placeholder="YYYY-MM-DD"
              pattern="^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"
            />
          </div>
          <div className="signup-form-bio">
            <label>Bio</label>
            <textarea
              value={this.state.bio}
              onChange={this.update("bio")}
              className="signup-input"
              placeholder="Tell us about yourself! (If you want to.)"
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
            id="signup-demouser"
            type="button"
            value="Demo user"
            onClick={this.handleDemoUser}
          />
        </form>
      </div>
    );
  }
}

export default SignupForm;
