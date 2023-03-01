import React,{useRef} from 'react'

export default function useRefs() {
    const inputRef=useRef()
    function handleOutput(){
       // console.log('hello world');
       //inputRef.current.value="1000"
       //inputRef.current.focus()
       inputRef.current.style.color="red"
    }
  return (
    <div>
      <h1>use ref hooks in react</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleOutput}>Handle-Output</button>
    </div>
  )
}
