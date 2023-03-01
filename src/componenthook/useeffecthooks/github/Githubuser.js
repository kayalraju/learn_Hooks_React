import React from 'react'

export default function Githubuser({users}) {
  return (
    <>
      <div className='container'>
    <div className='row'>
            {
                users.map((CurrentData)=>{
                    return(
        <div className='col-md-4' key={CurrentData.id}>
            <div className="card cardd" >
            <img className="card-img-top" src={CurrentData.avatar_url} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{CurrentData.login}</h5>
            <p className="card-text">{CurrentData.type}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
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
