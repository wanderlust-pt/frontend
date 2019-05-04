import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import Marketing from "./components/Marketing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => {
              return <Marketing {...props} />;
            }}
          />
          <nav>
            <button className="login">
              <Link to="/login">Registered User</Link>
            </button>{" "}
            <button className="login">
              <Link to="/Register">Not Registered User </Link>
            </button>
          </nav>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <div className="main">
            <PrivateRoute exact path="/protected" component={AddTodo} />
            <PrivateRoute exact path="/protected" component={TodoList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
