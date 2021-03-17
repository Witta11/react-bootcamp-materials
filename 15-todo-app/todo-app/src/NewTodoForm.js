import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: [evt.target.value],
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <input
          type="text"
          placeholder="Add new To Do"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button className="NewTodoForm-Button">Add</button>
      </form>
    );
  }
}

export default NewTodoForm;