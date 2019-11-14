import React, { Component } from 'react';

import Todos from './Todos';
import AddTodo from './AddTodo';

import './App.css'

class App extends Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="app">
        <h1>My Todos App</h1>
        <Todos  deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;