import React from "react"


export function BirthdayCard ({imgUrl, name,age,id,callBack}){
    return (
        <section className="birthday-card">
            <div className="img-container">
                <img src={imgUrl} alt={`${name} display profile pic`}></img>
            </div>
            <div className="celebrant-details">
                <h4>{name}</h4>
                <p>{age} years</p>
                <button className="btn card-btn" onClick={()=> callBack(id)}>Send Message</button>
            </div>
        </section>
    )
}

