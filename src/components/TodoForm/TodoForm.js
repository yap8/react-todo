import React, { useState } from 'react'
import './TodoForm.scss'

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
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="TodoForm__input"
        type="text" 
        name="title"
        value={state.title}
        onChange={handleChange} 
      />
      <button className="TodoForm__button">Add</button>
    </form>
  )
}

export default TodoForm
