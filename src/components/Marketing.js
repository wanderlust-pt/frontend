import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <div>
      <div className="Welcome">Welcome to WunderList!!</div>
      <nav>
        <button className="login">
          <Link to="/login">Registered User</Link>
        </button>{" "}
        <button className="login">
          <Link to="/Register">Not Registered User </Link>
        </button>
      </nav>
    </div>
  );
};

export default Marketing;
