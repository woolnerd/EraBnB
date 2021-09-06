import React from 'react';
// CHANGE THIS PAGE


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthdate: '',
      bio: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {...this.state};
    this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.error.map((err, i) => (
          <li key={`err-${i}`}>
            {err}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to Era bnb!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label>Email:
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password"

              />
            </label>
            <br/>
            <label>First Name:
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
                placeholder="First Name"
              />
            </label>
            <br/>
            <label>Last Name:
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
                placeholder="Last Name"
              />
            </label>
            <br/>
            <label>Date of Birth:
              <input type="text"
                value={this.state.birthdate}
                onChange={this.update('birthdate')}
                className="signup-input"
                placeholder="Date of Birth"
              />
            </label>
            <br/>
            <label>Bio:
              <textarea
                value={this.state.bio}
                onChange={this.update('bio')}
                className="signup-input"
                placeholder="Bio"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
