import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import "../App.css";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            id={todo.id}
            key={todo.id}
            className={todo.completed ? "completed" : "incomplete"}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);

//after url
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getTodos, clearCompleted } from "../actions";
// import Todo from "./Todo";
// import "./App.css";

// class TodoList extends Component {
//   // constructor() {
//   //   super();
//   // }

//   componentDidMount() {
//     this.props.getTodos();
//   }

//   render() {
//     return this.props.fetching ? (
//       <div />
//     ) : (
//       <div>
//         <div>
//           {this.props.todos.map(todo => (
//             <Todo key={todo.id} todo={todo} />
//           ))}
//         </div>
//         <button onClick={() => this.props.clearCompleted()}>
//           Clear Completed
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     todos: state.todos,
//     fetching: state.fetching
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getTodos, clearCompleted }
// )(TodoList);
