import React, { useEffect, useState } from 'react'

export default function FetchapiData() {
    const [user, setUser] = useState([])

    const getUser = async () => {
        // const response= await fetch('https://api.github.com/users')
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //const data= await response.json()
        //console.log(data);
        setUser(await response.json())
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <h1 className='hi'>Fetch Api data </h1>
            <div className='container'>
                <div className='row'>
                    {
                        user.map((CurrentData) => {
                            return (
                                <div className='col-md-4' key={CurrentData.id}>
                                    <div className="card cardd" >
                                        Name: {CurrentData.name}
                                        <div className="card-body">
                                            <h5 className="card-title">Email: {CurrentData.email}</h5>
                                            <p className="card-text">City : {CurrentData.address.city}</p>
                                            <p className="card-text">ZipCode : {CurrentData.address.zipcode}</p>
                                            <a href="#" className="btn btn-primary">userDetails</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
