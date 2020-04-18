import React  from 'react';

export default function Cards ({user}){
    return(
        <div className="card m-4 p-4" >
                <img src={user.picture.large} style={{width: "100%"}} alt="user info"/>
                <h1>{user.name.first}</h1>
                  <p className="title">{user.email}</p>
                  <p>{user.location.city}</p>
                <div className="d-flex justify-content-around">
                  <a href="/"><i className="fa fa-dribbble"></i></a> 
                  <a href="/"><i className="fa fa-twitter"></i></a>  
                  <a href="/"><i className="fa fa-linkedin"></i></a>   
                  <a href="/"><i className="fa fa-facebook"></i></a> 
                </div>
                <p><button className="btn btn-primary">Contact</button></p>
         </div>
    )
}

