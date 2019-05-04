import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos } from "../actions";
import Todo from "./Todo";
import "../App.css";

class TodoList extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return this.props.fetching ? (
      <div />
    ) : (
      <div>
        <div>
          {this.props.todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getTodos }
)(TodoList);
