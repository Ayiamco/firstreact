
import {birthdayData} from './data';
import React, {useState} from 'react'
import {Link} from "react-router-dom"

import '../css/Exercise1.css'

function Exercise1() {

  let [value, setValue]=useState(birthdayData)
  
   function deleteItem(id){
    setValue(value.filter((item)=> item.id!==id))
  }
  return (
    <div id="Exercise1-container">
      
      <div className="Exercise1-main-container">
        <h1 style={{textAlign:"center",margin:"0.5em"}}>Exercise 1</h1>
        <p>{value.length} birthdays today</p>
        {
          value.map( (birthday)=>{
        return (
        <BirthdayCard key={birthday.id} name={birthday.Name} age={birthday.Age} imgUrl={birthday.Img} id={birthday.id} callBack={deleteItem} />
        )
      })
      }
        
      <button type="button" className="Exercise1-btn" onClick={()=> setValue([]) }> Clear All</button>
      <div className="div-nextExercise">
      <Link to="/Exercise2" className="nextExercise">
        
        <i class="fas fa-arrow-left"> Prev Exercise</i>
      </Link>
      <Link to="/Exercise2" className="nextExercise">
        
        <i class="fas fa-arrow-right"> Next Exercise</i>
      </Link>
      </div>
      
    </div>
    
    </div>
    
    

  );
}

export function BirthdayCard ({imgUrl, name,age,id,callBack}){
    return (
        <section className="Exercise1-birthday-card">
            <div className="Exercise1-img-container">
                <img src={imgUrl} alt={`${name} display profile pic`}></img>
            </div>
            <div className="Exercise1-celebrant-details">
                <h4>{name}</h4>
                <p>{age} years</p>
                <button className="Exercise1-btn Exercise1-card-btn" onClick={()=> callBack(id)}>Send Message</button>
            </div>
        </section>
    )
}



export default Exercise1;
