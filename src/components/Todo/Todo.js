import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn javascript',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Learn to touch-type',
      isCompleted: true
    },
    {
      id: 3,
      title: 'Learn react w/ redux',
      isCompleted: false
    }
  ])

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
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}  
      />
    </div>
  )
}

export default Todo
