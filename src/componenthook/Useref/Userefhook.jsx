import React from 'react'
import { useState,useRef } from 'react'

const Userefhook = () => {
    const [name,setName]=useState()
    const inputEl=useRef(null)
    console.log(inputEl);
    const resetInput=()=>{
        setName("")
        inputEl.current.focuse()
        inputEl.current.style.color="red"

    }
  return (
    <div className='hooks'>
      <h1>use ref hooks in react</h1>
    <form>
        <input type='text' name='name' autoComplete='off' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} ref={inputEl} />
        <button onClick={resetInput}>Reset</button>
    </form>
    <div>
        <h2>my name is {name}</h2>
    </div>
    </div>
  )
}

export default Userefhook
