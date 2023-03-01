import React,{useContext} from 'react'
import { grobalInfo } from './Contex'
import Nthchild from './Nthchild'
export default function Superchild() {
    const {appcolor}=useContext(grobalInfo)
  return (
    <div>
      <h1 style={{color:appcolor}}>Reat Super child component</h1>
      <Nthchild/>
    </div>
  )
}
