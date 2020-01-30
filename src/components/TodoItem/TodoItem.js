import React, { useState } from 'react'

const TodoItem = ({ id, title, isCompleted, editTodoTitle, completeTodo, deleteTodo }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const [stateTitle, setStateTitle] = useState(title)

  const TodoItemStyles = {
    color: isCompleted ? 'green' : 'black'
  }

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

  return (
    <li style={TodoItemStyles}>
      <input 
        ref={inputElement}
        type="text" 
        readOnly={true}
        value={stateTitle}
        onChange={handleChange} 
      />
      <button onClick={handleEdit}>{isBeingEdited ? 'Update' : 'Edit'}</button>
      <button onClick={() => completeTodo(id)}>Complete</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
