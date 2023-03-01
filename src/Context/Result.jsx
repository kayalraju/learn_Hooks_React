import React,{useContext} from 'react'
import noteContex from './notes/NoteState'


export default function Result() {
    const a=useContext(noteContex)
  return (
    <div>
     <h1>result {a.name}</h1> 
    </div>
  )
}
