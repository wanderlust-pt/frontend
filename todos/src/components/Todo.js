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
      <div className="taskcombined">
        <div className="taskbutton">
          <div>
            <button
              className="icon"
              onClick={() => this.props.updatingTodo(id)}
            >
              ^
            </button>
            <button className="icon" id={id} onClick={this.deleteTodoHandle}>
              x
            </button>
          </div>
        </div>
        <div
          className={this.props.todo.completed ? `complete` : `incomplete`}
          onClick={() => this.props.toggleTodo(id)}
        >
          <p>{task}</p>
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
