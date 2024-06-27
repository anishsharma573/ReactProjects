// src/components/SwitchTheme.js
import React, { useContext } from 'react'
import { ThemeContext } from '../context/Context'
import ThemeToggler from '../context/ThemeToggler'

const SwitchTheme = () => {
  const {toggleTheme} =useContext(ThemeContext)
  return (
    <div>
      <button onClick={toggleTheme}>
        Theme Change
      </button>
    </div>
  )
}

export default SwitchTheme
