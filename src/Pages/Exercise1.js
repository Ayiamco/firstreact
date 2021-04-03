
import {birthdayData} from '../data';
import React, {useState} from 'react';
import {BirthdayCard} from "../components/BirthDayCard"


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
    </div>
    
    </div>
    
    

  );
}





export default Exercise1;
