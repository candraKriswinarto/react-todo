import React, { Component } from 'react';

import Todos from './Todos';
import AddTodo from './AddTodo';

import './App.css'

class App extends Component {
  state = {
    todos: [],
    message: '',
    classMessage: ''
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos,
      message: "Task has been remove successfully",
      classMessage: "danger"

    })
    setTimeout(() => {
      this.setState({
        message: ""      })
    }, 2000)
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      message: "New todo has been added successfully",
      classMessage: "success"
    })
    setTimeout(() => {
      this.setState({
        message: ""      })
    }, 2000)
  }

  render() {
      const message = this.state.message !== '' ? (
        <div className={`message ${this.state.classMessage}`}>
          <p>{this.state.message}</p>
        </div>
      ) : null;
    return (
      <div className="app">
        <h1>My Todos App</h1>
        {message}
        <Todos  deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;