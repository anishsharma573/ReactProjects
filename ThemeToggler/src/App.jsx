import React, { useContext } from 'react'
import { ThemeContext } from './context/Context'
import ThemeToggler from './context/ThemeToggler'
import SwitchTheme from './components/SwitchTheme'

const App = () => {
 const {isDarkTheme} =useContext(ThemeContext)

 const ThemeStyles ={
  backgroundColor  :isDarkTheme? "#333":"#fff",
  color: isDarkTheme ? '#FFF' : '#333',
  height:'100vh',
  boxSizing: 'border-box',
  display :'flex',
  justifyContent:'center',
  alignItems :'center',
  flexDirection:"column",
  padding:"20px",
  borderRadius:'0px',
  border:'none',
  overflow :"none"
 }

  return (
    <div style={ThemeStyles} >
       <h1>{isDarkTheme ? 'Dark' : 'Light'} Theme</h1>
<SwitchTheme/>      
    </div>
  )
}

export default ()=>(
  <ThemeToggler>
    <App/>
  </ThemeToggler>
)
