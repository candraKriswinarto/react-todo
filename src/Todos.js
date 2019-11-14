import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todos" key={todo.id}>
         <div className="todo-wrap">
          <p className="todo">{todo.content}</p>
          <button onClick={() => {deleteTodo(todo.id)}}>Remove</button>
         </div>
        </div>
      )
    })
  ) : (
    <p className="no-todo">You have any todo lefft.</p>
  )
  return (
    <div className="todos">
      {todoList}
    </div>
  )
}

export default Todos;