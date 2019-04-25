import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class TodoForm extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddToDo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div>
        <div>
          {this.props.todoItems.map((item) => (
            <ul>{item.todoItem}</ul>
          ))}
        </div>
        <div>
          <input
            name="newTodo"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add your todo"
          />
          <button onClick={this.handleAddToDo}>Add Your Todo</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoItems: state.todoItems
});

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
