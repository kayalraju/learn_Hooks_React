import React,{createContext,useState} from 'react'

import Child from './Child'
export const grobalInfo=createContext()

export default function Contex() {
    const [color,setColor]=useState("red")
  return (
    <grobalInfo.Provider value={{appcolor:color}}>
    <div>
      <h1>Parent Component</h1>
      <Child/>
    </div>
    </grobalInfo.Provider>
  )
}
