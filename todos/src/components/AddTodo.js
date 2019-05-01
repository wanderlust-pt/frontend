//after url

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../actions";

// class AddTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: null,
//       text: "",
//       completed: false
//     };
//   }

//   changeHandler = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   addTodoHandle = event => {
//     event.preventDefault();

//     this.props.addTodo(this.state.text);
//     this.setState(() => ({
//       text: "",

//       completed: false
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.addTodoHandle}>
//           <input
//             name="name"
//             value={this.state.text}
//             onChange={this.changeHandler}
//             type="text"
//             placeholder="add item"
//             required
//           />

//           <input type="submit" value="Add items" />
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   };
// };
// export default connect(
//   mapStateToProps,
//   { addTodo }
// )(AddTodo);
