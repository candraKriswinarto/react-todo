import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content:''
    })
  }
  render() {
    return (
      <div className="addtodo">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Add Todo</label>
          <input onChange={this.handleChange} type="text" value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddTodo;