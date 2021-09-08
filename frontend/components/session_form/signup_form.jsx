import React from "react";

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

  renderErrors() {
    return (
      <ul className="form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h2>Welcome to erabnb!</h2>
          <br />
          <p>
            Please {this.props.formType}
          </p>
          {this.renderErrors()}
          <div className="signup-form">
            <div className="signup-email">
              <label>Email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"
                // placeholder="Email"
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
              />
            </div>
            <div className="signup-first-name">
              <label>First Name</label>
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="signup-input"
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
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
