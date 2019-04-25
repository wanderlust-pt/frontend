import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoForm extends React.Component {
  state = {
   task: "",
   completed: false,
    // {task: "', id: Date.now(), completed: false,}
  };

  handleChanges = (e) => {
    this.setState({[e.taget.task]: e.target.value });
  };

  handleAddToDo = (e) => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      completed: this.state.completed,
    }
    this.props.addTodo(newTodo);
    this.setState({ task:'', completed: false });
  };

  render() {
    return (
      <div>
        <form>
        <input
          name="newTodo"
          type="text"
          value={this.state.task}
          onChange={this.handleChanges}
          placeholder="Add your todo"
        />
        <button onClick={this.handleAddToDo}>Add Your Todo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  addingTodo: state.addingTodo,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
