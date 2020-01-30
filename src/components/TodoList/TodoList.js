import React from 'react'
import './TodoList.scss'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, editTodoTitle, completeTodo, deleteTodo }) => {
  todos = todos.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      title={todo.title}
      isCompleted={todo.isCompleted}
      flags={todo.flags}
      editTodoTitle={editTodoTitle}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ))
  
  return (
    <ul className="TodoList">
      {todos}
    </ul>
  )
}

export default TodoList
