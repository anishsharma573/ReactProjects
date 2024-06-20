import React, { useState } from 'react'


const App = () => {
  const [color,setColor]=useState("#020617")
  return (
   
    <div className='h-screen' style={{backgroundColor:color}} >
      <h1 className='text-[#fff]  text-5xl mx-[800px]'> BG Changer</h1>
      <div className=' flex flex-row justify-center my-[900px] content items-center'>
      <button onClick={()=>setColor("#f43f5e")} type="button" class="  text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red</button>
      <button onClick={()=>setColor("#86198f")} type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink</button>
      </div>

    </div>
  )
}

export default App
