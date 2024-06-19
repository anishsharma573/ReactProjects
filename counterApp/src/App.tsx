import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <h1> Current Count is {count}</h1>
      <div className='container'>
        <button className='button-56' onClick={()=>setCount(count<10?(count+1):count)}> Increase Count</button>
        <button className='button-56' onClick={()=>setCount(count>0?(count-1):count)}> Decrease Count</button>
        <button className='button-56' onClick={()=>setCount(0)}> Reset Count</button>

      </div>
    </div>
    </>
  )
}

export default App
