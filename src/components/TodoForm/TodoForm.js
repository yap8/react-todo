import React, { useState } from 'react'
import './TodoForm.scss'

import TodoConfigurationMenu from '../TodoConfigurationMenu/TodoConfigurationMenu'

const TodoForm = ({ addTodo }) => {
  const [stateTitle, setStateTitle] = useState('')
  const [isBeingConfigured, setIsBeingConfigured] = useState(false)
  const [flags, setFlags] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    addTodo(stateTitle, flags)

    setStateTitle('')
    setFlags([])
  }

  const handleChange = ({ target: { value } }) => {
    setStateTitle(value)
  }

  const addFlag = (title, color) => {
    setFlags([
      ...flags,
      { title, color }
    ])
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      {isBeingConfigured && <TodoConfigurationMenu addFlag={addFlag} setIsBeingConfigured={setIsBeingConfigured} />}
      <input
        className="TodoForm__input"
        type="text" 
        name="title"
        value={stateTitle}
        onChange={handleChange} 
      />
      <button className="TodoForm__button">Add</button>
      <button 
        className="TodoForm__button"
        type="button"
        onClick={() => setIsBeingConfigured(!isBeingConfigured)}
      >Configure</button>
    </form>
  )
}

export default TodoForm
