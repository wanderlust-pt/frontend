import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../actions";
import EditTodo from "./EditTodo";

const Todo = ({ dispatch, todo, id }) => (
  <div>
    <h3
      className={todo.completed ? "complete" : "incomplete"}
      onClick={() => dispatch(toggleTodo(id))}
    >
      {todo.text}
    </h3>
    <button onClick={() => dispatch(editTodo(id))}>Edit</button>
    <button onClick={() => dispatch(deleteTodo(id))}>x</button>

    <div>{todo.editing === true ? <EditTodo todo={todo} /> : <p />}</div>
  </div>
);

export default connect()(Todo);

//after getting url
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updatingTodo, deleteTodo, toggleTodo } from "../actions";
// import EditTodo from "./EditTodo";
// import "./App.css";

// class Todo extends Component {
//   constructor() {
//     super();
//   }

//   deleteTodoHandle = event => {
//     let id = Number(event.target.id);
//     this.props.deleteTodo(id);
//   };

//   render() {
//     const { id } = this.props.todo;
//     return (
//       <div>
//         <div
//           className={this.props.todo.completed ? `complete` : null}
//           onClick={() => this.props.toggleTodo(id)}
//         >
//           <div>Text:{text}</div>
//         </div>

//         <div>
//           <button onClick={() => this.props.updatingTodo(id)}>edit</button>
//           <button id={id} onClick={this.deleteTodoHandle}>
//             x
//           </button>
//         </div>

//         <div>
//           {this.props.editing === id ? (
//             <EditTodo todo={this.props.todo} />
//           ) : (
//             <p />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     todos: state.todos,
//     editing: state.editing
//   };
// };

// export default connect(
//   mapStateToProps,
//   { updatingTodo, deleteTodo, toggleTodo }
// )(Todo);
