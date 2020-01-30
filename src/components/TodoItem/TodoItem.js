import React, { useState } from 'react'
import './TodoItem.scss'

const TodoItem = ({ id, title, isCompleted, editTodoTitle, completeTodo, deleteTodo }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const [stateTitle, setStateTitle] = useState(title)

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
      <button 
        className="TodoItem__button"
        onClick={handleEdit}
      >{isBeingEdited ? 'Update' : 'Edit'}</button>
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
