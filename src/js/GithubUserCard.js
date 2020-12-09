import React from 'react'

function GithubUserCard({imgUrl,name,githubUrl}){
    //console.log({imgUrl,name,githubUrl})
    return(
    <section className="user-card">
        <div className="image-container">
            <img src={imgUrl} alt="user profile pic"></img>
        </div>
        <div className="user-info">
             <p>{name}</p>
             <a href={githubUrl} target="_black">Profile</a>
        </div>
    </section>
    )
}

export default GithubUserCard;