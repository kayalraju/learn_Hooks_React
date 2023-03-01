import React,{useEffect,useState} from 'react'
import Githubuser from './github/Githubuser'
import Loding from './github/Loding'

export default function FetchapiLoding() {
    const [users,setUser]=useState([])
    const [loding, setLoding]=useState(true)
    const getUser=async()=>{
        try{           
             const response= await fetch('https://api.github.com/users')
            //const response= await fetch('https://jsonplaceholder.typicode.com/photos')
            //const data= await response.json()
            //console.log(data);
            setLoding(false)
       setUser(await response.json())
        }catch(error){
            setLoding(false)
            console.log("my error is "+error);
        }
    }
    useEffect(()=>{
        getUser()
    },[])

    if(loding){
        return <Loding />
    }


  return (
    <>
      <h1 className='hi'>Fetch Api loding  data git hub </h1>
      <Githubuser users={users} /> 
    </>
  )
}