import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, clearCompleted } from "../actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  // componentDidMount() {
  //   this.props.getTodos();
  // }

  changeHandler = event => {
    this.setState({
      text: event.target.value
    });
  };

  submitTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitTodo}>
        <input
          className="input"
          type="text"
          name="input"
          placeholder="Please enter your list"
          onChange={this.changeHandler}
          value={this.state.text}
          required
        />
        <div className="btn-container">
          <button className="btn" type="submit">
            Add New Item
          </button>
          <button className="btn" onClick={() => this.props.clearCompleted()}>
            Clear Completed
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
    //addingTodo: state.addingTodo,
    //error:state.error
  };
};

export default connect(
  mapStateToProps,
  { addTodo, clearCompleted }
)(TodoForm);
