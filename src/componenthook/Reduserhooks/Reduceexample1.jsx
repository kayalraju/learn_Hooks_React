import React from 'react'
import { useReducer } from 'react'

const initialstate=1
const reducer=(state,action)=>{
    switch (action){
        case 'incriment':
            return state +1
        case 'decriment':
            return state-1 
            default:
                return state    
    }
}
const Reduceexample1 = () => {
    const [count,dispatch] =useReducer(reducer,initialstate)
  return (
    <div>
      <h1>Usr reducer hooks</h1>

      <h1>Count {count}</h1>
      <button onClick={()=>{dispatch('incriment')}}>Incriment</button>
      <button onClick={()=>{dispatch('decriment')}}>Decriment</button>
    </div>
  )
}

export default Reduceexample1
