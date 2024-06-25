import React, { useState } from 'react'

import context from './context'

const Provider = (props) => {
  
  
  const[mission,setMission] =useState({
    name :" James bond",
    age :21,
    isMissionAccepted: "not accepted"
  })
  
    return (
    
      <context.Provider value={
        {
            data:mission,
            Accepted : ()=>{
                setMission({...mission, isMissionAccepted:"Accepted"})
            },
            
           NotAccepted : ()=>{
                setMission({...mission, isMissionAccepted:"Not Accepted"})
            },
            
        }
      }>
        {props.children}
      </context.Provider>
    
  )
}

export default Provider
