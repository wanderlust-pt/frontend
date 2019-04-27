// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { editTodo } from "../actions";

// class EditTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: "",
//       completed: "",
//       id: null
//     };
//   }

//   componentDidMount() {
//     const id = Number(this.props.match.params.id);
//     let todoId = this.props.todo.filter((todo) => todo.id === id);
//     todoId = todoId[0];
//     this.setState({
//       task: todoId.task,
//       completed: todoId.completed,
//       id: todoId.id
//     });
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   editTodo = (e) => {
//     e.preventDefault();
//     const updatedTodo = {
//       task: this.state.task,
//       completed: this.state.completed
//     };

//     this.props.editTodo(this.state.id, updatedTodo);
//     this.setState({
//       task: "",
//       completed: ""
//     });
//     //history??
//   };

//   render() {
//     return (
//       <div>
//         <form onSUbmit={this.editTodo}>
//           <input
//             onChange={this.handleChange}
//             placeholder="task"
//             value={this.state.task}
//             name="task"
//             type="text"
//           />

//           <button> Edit </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   todos: state.todos,
//   fetchingTodo: state.fetchingTodo,
//   error: state.error
// });

// export default connect(
//   mapStateToProps,
//   { editTodo }
// )(EditTodo);
