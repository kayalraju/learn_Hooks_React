import React from 'react'
import { useState,useEffect } from 'react'


const Reduceadvance1 = () => {
    const [loding,setLogind]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data =>{
      setLogind(false)
      setPost(data)
      setError('')
  })
  .catch(error=>{
    setLogind(false)
    setPost({})
    setError('There was problem')

  })
    },[])
  return (
    <div>
      <h1>Advance reducer api call normaly this example we use usestate now we see reduce example in  Reduceadvance2 file</h1>
      {loding ? 'Lodding.....' : post.title}
      {error || null}

      {post.body}
    </div>
  )
}

export default Reduceadvance1
