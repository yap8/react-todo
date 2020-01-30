import React, { useState } from 'react'
import './TodoConfigurationMenu.scss'

const TodoConfigurationMenu = ({ addFlag, setIsBeingConfigured }) => {
  const [inputValue, setInputValue] = useState('')
  const [colorValue, setColorValue] = useState('red')

  const handleClick = () => {
    setInputValue('')

    addFlag(inputValue, colorValue)
  }

  const handleInputChange = ({ target: { value }}) => {
    setInputValue(value)
  }

  const handleColorChange = ({ target: { value }}) => {
    setColorValue(value)
  }

  return (
    <div className="TodoConfigurationMenu">
      <div 
        className="TodoConfigurationMenu__hide-area"
        onClick={() => setIsBeingConfigured(false)}
      ></div>
      <div className="TodoConfigurationMenu__inner">
        <button 
          className="TodoConfigurationMenu__hide-button"
          type="button"
          onClick={() => setIsBeingConfigured(false)}
        >&times;</button>
        <h1 className="TodoConfigurationMenu__title">Configuration</h1>
        <div className="TodoConfigurationMenu__pseudo-form">
          <input 
            className="TodoConfigurationMenu__input"
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
          />
          <select 
            className="TodoConfigurationMenu__select"
            onChange={handleColorChange}
          >
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
          </select>
          <button
            className="TodoConfigurationMenu__add-flag-button"
            type="button"
            onClick={handleClick}
          >Add flag</button>
        </div>
      </div>
    </div>
  )
}

export default TodoConfigurationMenu
