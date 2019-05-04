import React, { Component } from "react";
import { connect } from "react-redux";
import { addUsers } from "../actions";

import { Link } from "react-router-dom";

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
        <div className="user">
          First Name:
          <input
            className="info"
            name="firstname"
            type="text"
            placeholder="First Name"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="user">
          Middle Name:
          <input
            className="info"
            name="middlename"
            type="text"
            placeholder="Middle Name"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="user">
          Last Name:
          <input
            className="info"
            name="lastname"
            type="text"
            placeholder="Last Name"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="user">
          User Name:
          <input
            className="info"
            name="username"
            type="text"
            placeholder="User Name"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="user">
          Password:
          <input
            className="info"
            name="password"
            type="text"
            placeholder="**********"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="user">
          Email:
          <input
            className="info"
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button className="submit">
            <Link to="/login">Register</Link>
          </button>
        </div>
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
