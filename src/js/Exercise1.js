
import {birthdayData} from './data';
import {BirthdayCard} from './birthdayCard';
import React, {useState} from 'react'

import './css/Exercise1.css'

function Exercise1() {

  let [value, setValue]=useState(birthdayData)
  
   function deleteItem(id){
    setValue(value.filter((item)=> item.id!==id))
  }
  return (
    <div className="main-container">
      <h1 style={{textAlign:"center",margin:"0.5em"}}>Exercise 1</h1>
      <p>{value.length} birthdays today</p>
      {
        value.map( (birthday)=>{
      
      return (
      <BirthdayCard key={birthday.id} name={birthday.Name} age={birthday.Age} imgUrl={birthday.Img} id={birthday.id} callBack={deleteItem} />
      )
    })
    }
      
    <button type="button" className="btn" onClick={()=> setValue([]) }> Clear All</button>
    </div>
    


  );
}

export default Exercise1;