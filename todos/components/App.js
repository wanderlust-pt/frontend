import React, { Component } from "react";
//Router

import TodosList from "./TodosList";
import TodoForm from "./TodoForm";

class App extends Component {
  state = {}; //

  render() {
    return (
      <div>
        <h1>
          <TodoForm />
          <TodosList />
        </h1>
      </div>
    );
  }
}

export default App;
