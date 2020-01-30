import React from 'react'

const TodoItem = ({ id, title, isCompleted, completeTodo, deleteTodo }) => {
  const TodoItemStyles = {
    color: isCompleted ? 'green' : 'black'
  }

  return (
    <li style={TodoItemStyles}>
      <h4>{title}</h4>
      <button onClick={() => completeTodo(id)}>Complete</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
