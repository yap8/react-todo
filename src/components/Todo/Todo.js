import React, { useState, useEffect } from 'react'
import './Todo.scss'

import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    const todo = {
      id: Math.random(),
      title,
      isCompleted: false
    }

    setTodos([
      ...todos,
      todo
    ])
  }

  const editTodoTitle = (id, title) => {
    const todosUpdated = todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    })

    setTodos(todosUpdated)
  }

  const completeTodo = (id) => {
    const todosUpdated = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })

    setTodos(todosUpdated)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="Todo">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodoTitle={editTodoTitle}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}  
      />
    </div>
  )
}

export default Todo
