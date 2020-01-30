import React, { useState } from 'react'
import './TodoItem.scss'

const TodoItem = ({ id, title, isCompleted, flags = [], editTodoTitle, completeTodo, deleteTodo }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const [stateTitle, setStateTitle] = useState(title)

  flags = <ul className="TodoItem__flags">
    {flags.map((flag, index) => <li key={index} className="TodoItem__flag" style={{backgroundColor: flag.color}}>{flag.title}</li>)}
  </ul>

  const handleEdit = () => {
    if (inputElement.current.readOnly) {
      setIsBeingEdited(true)
      inputElement.current.readOnly = false

      inputElement.current.focus()
    } else {
      setIsBeingEdited(false)
      inputElement.current.readOnly = true

      editTodoTitle(id, stateTitle)
    }
  }

  const handleChange = ({ target: { value }}) => {
    setStateTitle(value)
  }

  const inputElement = React.createRef()

  let TodoItemClassName = 'TodoItem'

  if (isCompleted) {
    TodoItemClassName += ' TodoItem--completed'
  }

  if (isBeingEdited) {
    TodoItemClassName += ' TodoItem--editing'
  }

  return (
    <li className={TodoItemClassName}>
      <input 
        className="TodoItem__input"
        ref={inputElement}
        type="text" 
        readOnly={true}
        value={stateTitle}
        onChange={handleChange} 
      />
      {flags}
      <button 
        className="TodoItem__button"
        onClick={handleEdit}
      >{isBeingEdited ? 'Confirm' : 'Edit'}</button>
      <button
        className="TodoItem__button" 
        onClick={() => completeTodo(id)}
      >Complete</button>
      <button
        className="TodoItem__button" 
        onClick={() => deleteTodo(id)}
      >Delete</button>
    </li>
  )
}

export default TodoItem
