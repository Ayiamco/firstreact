import React,{useState} from 'react'

import "./css/app.css"

const App = () => {
    let [person, setPerson]=useState({firstname:"",lastname:"",age:"",github:"",address:""});
    let[users,setUsers]=useState([])
    
    
    return (
        <div>
            <h1 style={{textAlign:"center",color:"white"}}>Exercise 3</h1>
            <Userform  person={person} setPerson={setPerson} users={users} setUsers={setUsers}  ></Userform>
            <UsersContainer users={users}/>
        </div>
    )
}

export default App

function Userform({person,setPerson,users,setUsers}){

    function inputChangeHandler(e){
        setPerson({...person, [e.target.name]:e.target.value})
        console.log("person: ",person)
    }

    function formHandler(e){
        e.preventDefault();
        setUsers((prevUsers)=>{
            console.log("users prev state: ",prevUsers)
            return [person,...prevUsers];
        })
        setPerson({firstname:"",lastname:"",age:"",github:"",address:""});
        
        
    }
    return(
        <form className="form" onSubmit={formHandler} >
            <FormInput onChangeHandler={inputChangeHandler} name="firstname" labelValue="Firstname" value={person.firstname}/>
            <FormInput onChangeHandler={inputChangeHandler} name="lastname" labelValue="Lastname" value={person.lastname}/>
            <FormInput onChangeHandler={inputChangeHandler} name="age" labelValue="Age" value={person.age}/>
            <FormInput onChangeHandler={inputChangeHandler} name="github" labelValue="Github Url" value={person.github}/>
            <FormInput onChangeHandler={inputChangeHandler} name="address" labelValue="Address" value={person.address}/>
            <button type="submit"> Add User</button>
        </form>
    )
}

function FormInput({name,labelValue,value,onChangeHandler}){
   return( 
        <div className="form-control">
            <label htmlFor={name}>{labelValue} </label>
            <input id={name} name={name}  value={value} onChange={onChangeHandler}></input>
        </div>
   )}

function UsersContainer({users}){
    return (
            <ul>
                {
                    users.map((user,index)=>{
                    return  <li key={new Date().getTime().toString() +index}>Name: {user.firstname} {user.lastname}</li>
                })
                }
            </ul>
        
    )
}