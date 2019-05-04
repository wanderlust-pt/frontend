import React, { Component } from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = props.todo;
  }

  // componentWillUnmount() {
  //   // this.props.getTodos();
  // }

  changeHandler = event => {
    this.setState({ task: event.target.value });
  };

  editTodoHandle = event => {
    event.preventDefault();
    this.props.editTodo(this.state);
    this.setState(() => ({
      task: "",
      completed: false
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.editTodoHandle}>
          <div className="update">
            <input
              className="edit"
              name="task"
              value={this.state.task}
              onChange={this.changeHandler}
              type="text"
              placeholder="Please edit your item"
              required
            />
            <input className="updatesubmit" type="submit" value="Update" />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { editTodo }
)(EditTodo);
