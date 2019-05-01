import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodo } from "../actions";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.todo.text
    };
  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  updateTodo = (event) => {
    event.preventDefault();
    let todo = this.props.todo;
    todo.text = this.state.text;
    this.props.updateTodo(todo);
  };

  render() {
    return (
      <form onSubmit={this.updateTodo}>
        <input
          type="text"
          name="name"
          placeholder="Please enter your list"
          onChange={this.changeHandler}
          value={this.state.text}
        />
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { updateTodo }
)(EditTodo);

//after url

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { editTodo } from "../actions";

// class EditTodo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: props.todo.text
//     };
//   }

// componentDidMount() {
//   const {  id } = this.props.todo;
//   this.setState({
//     id,

//   });
// }

//   changeHandler = event => {
//     this.setState({ text: event.target.value });
//   };

//   editTodoHandle = event => {
//     event.preventDefault();
//     let edited = this.props.edited;
//     edited.text = this.state.text;
//     this.props.editTodo(edited);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.editTodoHandle}>
//           Edit
//           <input
//             name="text"
//             value={this.state.text}
//             onChange={this.changeHandler}
//             type="text"
//             placeholder="Please enter your list"
//             required
//           />
//           <input type="submit" value="submit" />
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
//   { editTodo }
// )(EditTodo);
