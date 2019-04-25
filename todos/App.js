import React, { Component } from "react";

import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Todo </h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
