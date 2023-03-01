import React,{useRef} from 'react'

const Advanceuseref = () => {
    const inputref=useRef(null)
    const changeInput=()=>{
        console.log("function call");
        inputref.current.value="200"
        //*for focus change in input value
        inputref.current.focus()
        //*change the color
        inputref.current.style.color="red"
        //* change display none
        //inputref.current.style.display="none"
        }
  return (
    <div>
      <h1>useRef hooks hjvh</h1>
      <input type='text' placeholder='name' ref={inputref}/>
      <button onClick={changeInput}>Reset</button>
    </div>
  )
}

export default Advanceuseref
