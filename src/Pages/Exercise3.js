import React,{useState,useContext} from 'react'
import {UsersContainer} from "../components/UsersContainer";
import {FormInput} from "../components/FormInput";

import "../css/Exercise3.css"

export const Ex3Context=React.createContext();
const Exercise3 = () => {
    let [person, setPerson]=useState({firstname:"",lastname:"",age:"",github:"",address:""});
    let [inputErrorState,setInputErrorState]=useState({
        firstname:"none",lastname:"none",age:"none",github:"none",address:"none"})
    let [validationMessage,setValidationMessage]=useState({
        firstname:"required",lastname:"required",age:"required",github:"required",address:"required"
    })
    let[users,setUsers]=useState([])
  
    return (
        <Ex3Context.Provider value={{users,inputErrorState,person,setPerson,validationMessage,setValidationMessage}} > 
        <div className="Exercise3-container">
            <h1 style={{textAlign:"center",color:"white"}}>Exercise 3</h1>
            <Userform  person={person} setPerson={setPerson} users={users} 
                setUsers={setUsers} inputErrorState={inputErrorState} 
                setInputErrorState={setInputErrorState} ></Userform>
            <UsersContainer users={users}/>
            
        </div>
        </Ex3Context.Provider>
    )
}


function Userform({person,setPerson,setUsers,setInputErrorState}){
    let {setValidationMessage,users}=useContext(Ex3Context);
    function formHandler(e){
        e.preventDefault();
        let isInvalidFormSubmission=true;
        for (const key in person){
            if(key==="age" && person[key]  ){
                if(!Number.isNaN(parseInt(person[key]))){
                    setValidationMessage((prev)=>{
                    return {...prev,"age":"required"}   
                })
                }
                else{
                    console.log("inpt is nan")
                    isInvalidFormSubmission=false;
                    setInputErrorState((prevValue)=>{
                        return {...prevValue,[key]:"block"}
                    })
                    setValidationMessage((prev)=>{
                        return {...prev,"age":"Invalid Entry: Must be a number"}
                    })
                    return; 
                }
            }
            
            if(person[key]===""){
                setInputErrorState((prevValue)=>{
                    return {...prevValue,[key]:"block"}
                })
                isInvalidFormSubmission=false;
            }
            else{
                setInputErrorState((prevValue)=>{
                    return {...prevValue,[key]:"none"}
                })
            }
        } 

        if(isInvalidFormSubmission  ){
        
            console.log(users,person)
                setUsers((prevUsers)=>{
                    return [person,...prevUsers];
                })
                setPerson({firstname:"",lastname:"",age:"",github:"",address:""});
                setInputErrorState({
                    firstname:"none",lastname:"none",age:"none",github:"none",address:"none"
                })
            }
    }

    return(
        <form className="Exercise3-form" onSubmit={formHandler} >
            <FormInput  name="firstname" labelValue="Firstname" type="text" />
            <FormInput   name="lastname" labelValue="Lastname" type="text"/>
            <FormInput   name="age" labelValue="Age" type="number"/>
            <FormInput  name="github" labelValue="Github Url" type="text" />
            <FormInput  name="address" labelValue="Address" type="text" />
            <button type="submit" id="btn-exercise3"> Add User</button>
        </form>
    )
}





export default Exercise3