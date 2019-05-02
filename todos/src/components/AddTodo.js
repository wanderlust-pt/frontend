import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, clearCompleted } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "testing",
      notes: "asdfaasf",
      setDate: null,
      userId: 2,
      task: "",
      created_at: "2019-04-30 02:47:22",
      updated_at: "2019-04-30 02:47:22",
      completed: 0
    };
  }

  changeHandler = (event) => {
    this.setState({ task: event.target.value });
  };

  addTodoHandle = (event) => {
    event.preventDefault();
    this.state.id = Date.now();
    this.props.addTodo(this.state);
    this.setState(() => ({
      task: "",
      completed: 0
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodoHandle}>
          <input
            name="name"
            value={this.state.task}
            onChange={this.changeHandler}
            type="text"
            placeholder="add item"
            required
          />

          <input type="submit" value="Add items" />
        </form>
        <button onClick={() => this.props.clearCompleted()}>
          Clear Completed
        </button>
      </div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(
  mapStateToProps,
  { addTodo, clearCompleted }
)(AddTodo);
