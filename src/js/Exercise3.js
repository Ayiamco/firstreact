import React,{useState,useContext} from 'react'
import {Link} from "react-router-dom"

import "../css/Exercise3.css"
const ContextProvider=React.createContext();

const Exercise3 = () => {
    let [person, setPerson]=useState({firstname:"",lastname:"",age:"",github:"",address:""});
    let [inputErrorState,setInputErrorState]=useState({
        firstname:"none",lastname:"none",age:"none",github:"none",address:"none"})
    let [validationMessage,setValidationMessage]=useState({
        firstname:"required",lastname:"required",age:"required",github:"required",address:"required"
    })
    let[users,setUsers]=useState([])
    
    
    return (
        <ContextProvider.Provider value={{users,inputErrorState,person,setPerson,validationMessage,setValidationMessage}} > 
        <div className="Exercise3-container">
            <h1 style={{textAlign:"center",color:"white"}}>Exercise 3</h1>
            <Userform  person={person} setPerson={setPerson} users={users} 
                setUsers={setUsers} inputErrorState={inputErrorState} 
                setInputErrorState={setInputErrorState} ></Userform>
            <UsersContainer users={users}/>
            <div className="div-nextExercise">
                <Link to="/Exercise2" className="nextExercise">
                
                <i class="fas fa-arrow-left"> Prev Exercise</i>
                </Link>
                <Link to="/Exercise1" className="nextExercise">
                
                <i class="fas fa-arrow-right"> Home</i>
                </Link>
            </div>
        </div>
        </ContextProvider.Provider>
    )
}


function Userform({person,setPerson,setUsers,setInputErrorState}){
    let {setValidationMessage,users}=useContext(ContextProvider);
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

function FormInput({name,labelValue,type}){
   
    const {person,setPerson,inputErrorState,validationMessage}=useContext(ContextProvider)
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

function UsersContainer({users}){
    let displayHd="none";
    if(users.length>0){
        displayHd="block"
    }
    return (
        
            <section style={{padding:"1em"}}>
                <h4 id="userItemHd" style={{display:displayHd}}>Added Users</h4>
                {
                    users.map((user,index)=>{
                    return(
                        <div className="Exercise3-userItem" key={new Date().getTime().toString() +index}>
                            <div id="circle">
                            <p>user {index+1}</p>
                            </div>
                            <aside  style={{marginTop:"1em"}}>
                                <p>Name: {user.firstname} {user.lastname}</p>
                                <p> Address: {user.address}</p>
                                <p> Age: {user.age}</p>
                                <p>GithubUrl: <a href={user.github}> {user.firstname}'s Github</a></p>
                                
                            </aside>
                        </div>
                        
                        
                        
                    ) 
                    

                })
                }
            </section>
        
    )
}

export default Exercise3