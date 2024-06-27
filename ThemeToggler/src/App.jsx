import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './context/Context';
import ThemeToggler from './context/ThemeToggler';
import SwitchTheme from './components/SwitchTheme';

const App = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState(isDarkTheme ? '#333' : '#fff');
  const [textColor, setTextColor] = useState(isDarkTheme ? '#fff' : '#333');

  useEffect(() => {
    setBackgroundColor(isDarkTheme ? '#333' : '#fff');
    setTextColor(isDarkTheme ? '#fff' : '#333');
  }, [isDarkTheme]);

  const ThemeStyles = {
    backgroundColor,
    color: textColor,
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '0px',
    border: 'none',
    overflow: 'hidden',
    gap :'10px'
  };

  return (
    <div style={ThemeStyles}>
      <h1>{isDarkTheme ? 'Dark' : 'Light'} Theme</h1>
      <SwitchTheme />
      <div>
        <label>
          Background Color:
          <input 
            type="color" 
            value={backgroundColor} 
            onChange={(e) => setBackgroundColor(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Text Color:
          <input 
            type="color" 
            value={textColor} 
            onChange={(e) => setTextColor(e.target.value)} 
          />
        </label>
      </div>
    </div>
  );
};

export default () => (
  <ThemeToggler>
    <App />
  </ThemeToggler>
);
