import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  todos = todos.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      title={todo.title}
      isCompleted={todo.isCompleted}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ))
  
  return (
    <ul>{todos}</ul>
  )
}

export default TodoList
