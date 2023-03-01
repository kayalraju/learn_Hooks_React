import React, { useEffect,useState } from 'react'

export default function TimerExample() {
    const [counttime,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count + 1)
        },1000)
    })
  return (
    <div>
      <h1>Set time out example using useEffect hooks</h1>
      <h1>stst count down {counttime}</h1>
    </div>
  )
}
