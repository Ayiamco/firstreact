import React,{useContext} from "react";
import {Ex3Context} from "../Pages/Exercise3";

export function FormInput({name,labelValue,type}){
   
    const {person,setPerson,inputErrorState,validationMessage}=useContext(Ex3Context)
    
    function onChangeHandler(e){
        setPerson({...person, [e.target.name]:e.target.value})
    }
    return( 
        <div className="Exercise3-form-control">
            <label htmlFor={name}>{labelValue} </label>
            <input id={name} name={name}  value={person[name]}
             onChange={onChangeHandler} type={type}></input>
            <p id={"validationMessageFor" + name} 
                style={{display:inputErrorState[name]}}>
                    {validationMessage[name]}</p>
        </div>
   )}