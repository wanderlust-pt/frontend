import React, { Component } from "react";
import { connect } from "react-redux";
import { updatingTodo, deleteTodo, toggleTodo } from "../actions";
import EditTodo from "./EditTodo";
import "../App.css";

class Todo extends Component {
  // constructor() {
  //   super();
  // }

  deleteTodoHandle = (event) => {
    let id = Number(event.target.id);
    this.props.deleteTodo(id);
  };

  render() {
    const { id, task } = this.props.todo;
    return (
      <div>
        <div
          className={this.props.todo.completed ? `complete` : null}
          onClick={() => this.props.toggleTodo(id)}
        >
          <div>task:{task}</div>
        </div>

        <div>
          <button onClick={() => this.props.updatingTodo(id)}>edit</button>
          <button id={id} onClick={this.deleteTodoHandle}>
            x
          </button>
        </div>

        <div>
          {this.props.editing === id ? (
            <EditTodo todo={this.props.todo} />
          ) : (
            <p />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    editing: state.editing
  };
};

export default connect(
  mapStateToProps,
  { updatingTodo, deleteTodo, toggleTodo }
)(Todo);
