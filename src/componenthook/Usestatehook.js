import React,{useState} from 'react'

export default function Usestatehook() {
     //console.log(useState('raj'));
  //var hi="Aditi gupta"
  const names="Aditi gupta"
  const [myName,setMyname]=useState(names)
  const changeName=()=>{
     //myName="Raju kayal"
     //console.log(hi);
    setMyname('Raju kayal')
  }
  //console.log(hi);
  return (
    <div>
      <h1>{myName}</h1>
      <button className='btn'onClick={changeName}>Click-forme</button>
    </div>
  )
}
