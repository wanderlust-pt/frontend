import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, clearCompleted } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "My List",
      notes: "", //asdfaasf
      setDate: null,
      userId: 2,
      task: "",
      created_at: Date.now(),
      //"2019-04-30 02:47:22",
      updated_at: Date.now(),
      //"2019-04-30 02:47:22",
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

  getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${
      month < 10 ? `0${month}` : `${month}`
    }${separator}/${date}/${year}${separator}
    `;
  }

  render() {
    return (
      <div>
        <h1 className="please">{this.state.title}</h1>
        <h4> {this.getCurrentDate()} </h4>
        <form onSubmit={this.addTodoHandle}>
          <div className="combined">
            <input
              className="add"
              name="name"
              value={this.state.task}
              onChange={this.changeHandler}
              type="text"
              placeholder="Please add your item"
              required
            />

            <input className="submit" type="submit" value="+" />
            <input
              className="submit"
              type="submit"
              value="✓"
              // value="Clear Completed Item"
              onClick={() => this.props.clearCompleted()}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(
  mapStateToProps,
  { addTodo, clearCompleted }
)(AddTodo);
