import React, { Component } from "react";
import { connect } from "react-redux";
import { addUsers } from "../actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: undefined,
      middlename: undefined,
      lastname: undefined,
      username: undefined,
      password: undefined,
      email: undefined
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = (e) => {
    e.preventDefault();
    this.props
      .addUsers(this.state)
      .then(() => this.props.history.push("/login"));
  };

  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <p>First Name:</p>
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          onChange={this.handleInputChange}
        />
        <p>Middle Name:</p>
        <input
          name="middlename"
          type="text"
          placeholder="Middle Name"
          onChange={this.handleInputChange}
        />
        <p>Last Name:</p>
        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          onChange={this.handleInputChange}
        />
        <p>User Name:</p>
        <input
          name="username"
          type="text"
          placeholder="User Name"
          onChange={this.handleInputChange}
        />
        <p>Password:</p>
        <input
          name="password"
          type="text"
          placeholder="**********"
          onChange={this.handleInputChange}
        />
        <p>Email:</p>
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={this.handleInputChange}
        />
        <button>Register</button>
      </form>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { addUsers }
)(Register);
