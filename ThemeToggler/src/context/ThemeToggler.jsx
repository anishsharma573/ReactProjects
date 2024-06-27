import React, { useState } from 'react'
import { ThemeContext } from './Context'



const ThemeToggler = ({children}) => {
 const [isDarkTheme,setIsDarkTheme] =useState(false)


 const toggleTheme =()=>{
  setIsDarkTheme((prevTheme)=>(!prevTheme))
 }
  return (
   <ThemeContext.Provider value={{isDarkTheme,toggleTheme}}>
    {children}
   </ThemeContext.Provider>
  )
}

export default ThemeToggler
