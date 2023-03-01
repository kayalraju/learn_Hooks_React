import React from 'react'
import NoteContex from './NoteContex'

export default function NoteState(props) {
    const state={
        "name":"raju",
        "class":"hs"
    }
  return (
    <div>
      <NoteContex.Provider value={state}>
        {props.childern}
      </NoteContex.Provider>
    </div>
  )
}
