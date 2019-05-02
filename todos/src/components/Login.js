import React from "react";
import { connect } from "react-redux";

import { handleLogin } from "../actions";
import Loader from "react-loader-spinner";

class Login extends React.Component {
  state = {
    credentials: {
      username: "loginTest",
      password: "123"
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        task: e.target.value
      }
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props
      .handleLogin(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <h2>Please Log In</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <div>{this.props.error && <p>{this.props.error}</p>}</div>
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { handleLogin }
)(Login);
