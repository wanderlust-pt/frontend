import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions";

const Todo = ({ dispatch, todo, id }) => (
  <div className="todo">
    <h3
      className={todo.completed ? "complete" : "incomplete"}
      onClick={() => dispatch(toggleTodo(id))}
    >
      {todo.text}
    </h3>
    <div className="delete" onClick={() => dispatch(deleteTodo(id))}>
      x
    </div>
  </div>
);

export default connect()(Todo);
