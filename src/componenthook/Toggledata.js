import React,{useState} from 'react'

export default function Toggledata() {
    var [myName, setName]=useState('Raju kayal ')

    const changeData=()=>{
        var name= myName
        if(name=='Raju kayal'){
            setName('Aditi gupta')
        }
        else{
            setName('Raju kayal')
        }
        
        
    } 
console.log(myName);
  return (
    <div>
      <h1>how to crate toggle tada using useState hooks</h1>
      <h2>{myName}</h2>
      <button className='btn' onClick={changeData}>click me</button>
    </div>
  )
}
