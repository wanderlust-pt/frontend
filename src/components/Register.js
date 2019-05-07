import React, { Component } from "react";
import { connect } from "react-redux";
import { addUsers } from "../actions";

import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        // firstname: "",
        // //middlename: "",
        // lastname: "",
        username: "",
        password: "",
        // email: ""
      }
    };
  }

  handleInputChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleRegister = (e) => {
    e.preventDefault();
    this.props
      .addUsers(this.state.user)
      .then(() => this.props.history.push("/login"));
  };

  render() {
    return (
      <form onSubmit={this.handleRegister}>
        {/* <div className="user">
          First Name:
          <input
            className="info"
            name="firstname"
            type="text"
            placeholder="First Name"
            value={this.state.user.firstname}
            onChange={this.handleInputChange}
          />
        </div> */}
        {/* <div className="user">
          Middle Name:
          <input
            className="info"
            name="middlename"
            type="text"
            placeholder="Middle Name"
            value={this.state.user.middlename}
            onChange={this.handleInputChange}
          />
        </div> */}
        {/* <div className="user">
          Last Name:
          <input
            className="info"
            name="lastname"
            type="text"
            placeholder="Last Name"
            value={this.state.user.lastname}
            onChange={this.handleInputChange}
          />
        </div> */}
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
            value={this.state.user.password}
          />
        </div>
        {/* <div className="user">
          Email:
          <input
            className="info"
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.user.email}
          />
        </div> */}
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
