import React,{useState} from 'react'

import "./css/app.css"

const App = () => {
    let [person, setPerson]=useState({firstname:"",lastname:"",age:"",github:"",address:""});
    let [inputErrorState,setInputErrorState]=useState({
        firstname:"none",lastname:"none",age:"none",github:"none",address:"none"})
    let[users,setUsers]=useState([])
    
    
    return (
        <div>
            <h1 style={{textAlign:"center",color:"white"}}>Exercise 3</h1>
            <Userform  person={person} setPerson={setPerson} users={users} 
                setUsers={setUsers} inputErrorState={inputErrorState} 
                setInputErrorState={setInputErrorState} ></Userform>
            <UsersContainer users={users}/>
        </div>
    )
}

export default App

function Userform({person,setPerson,setUsers,inputErrorState,setInputErrorState}){

    function inputChangeHandler(e){
        setPerson({...person, [e.target.name]:e.target.value})
    }

    function formHandler(e){
        e.preventDefault();
        let isInvalidFormSubmission=true;
        for (const key in person){
            
            if(person[key]===""){
                setInputErrorState((prevValue)=>{
                    return {...prevValue,[key]:"block"}
                })
                isInvalidFormSubmission=false;
            }
        } 

        if(isInvalidFormSubmission){
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
        <form className="form" onSubmit={formHandler} >
            <FormInput validationMessage={inputErrorState.firstname} onChangeHandler={inputChangeHandler} name="firstname" labelValue="Firstname" value={person.firstname}/>
            <FormInput validationMessage={inputErrorState.lastname} onChangeHandler={inputChangeHandler} name="lastname" labelValue="Lastname" value={person.lastname}/>
            <FormInput validationMessage={inputErrorState.age} onChangeHandler={inputChangeHandler} name="age" labelValue="Age" value={person.age}/>
            <FormInput validationMessage={inputErrorState.github} onChangeHandler={inputChangeHandler} name="github" labelValue="Github Url" value={person.github}/>
            <FormInput validationMessage={inputErrorState.address} onChangeHandler={inputChangeHandler} name="address" labelValue="Address" value={person.address}/>
            <button type="submit" id="btn-exercise3"> Add User</button>
        </form>
    )
}

function FormInput({name,labelValue,value,onChangeHandler,validationMessage}){
   
    return( 
        <div className="form-control">
            <label htmlFor={name}>{labelValue} </label>
            <input id={name} name={name}  value={value}
             onChange={onChangeHandler}></input>
            <p id={"validationMessageFor" + name} 
                style={{display:validationMessage}}>
                    feild is required</p>
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
                        <div className="userItem">
                        <div id="circle">
                        <p>user {index+1}</p>
                        </div>
                        <aside key={new Date().getTime().toString() +index} style={{marginTop:"1em"}}>
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