import React,{useContext} from 'react'
import {grobalInfo} from './Contex'
import Superchild from './Superchild';


export default function Child() {
    const {appcolor}=useContext(grobalInfo)
    console.log("color name",appcolor);
  return (
    <div>
      <h1 style={{color:appcolor}}>Child component</h1>
      <Superchild/>
    </div>
  )
}
