import React, { Component } from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import { getTodos } from "../actions";

class TodosList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        {!this.props.getTodos &&
          this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  fetchingTodos: state.fetchingTodos,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getTodos }
)(TodosList);
