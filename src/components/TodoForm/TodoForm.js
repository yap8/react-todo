import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [state, setState] = useState({
    title: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    addTodo(state.title)

    setState({
      ...state,
      title: ''
    })
  }

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        name="title"
        value={state.title}
        onChange={handleChange} 
      />
      <button>Add</button>
    </form>
  )
}

export default TodoForm
