import React, {useState,useEffect} from 'react'
import {PageHeadComponent} from "../components/PageHead";
import {Users,LoadingAnimation} from "../components/Users";
import {UserInput} from "../components/UserInput";

import '../css/Exercise2.css'

const url ="https://api.github.com/users"
function Exercise2(){

    let [users,setUsers]=useState([])
    let [screenSize,setScreenSize]=useState("");
    let [isShowing,setIsShowing]=useState(true)
    let [isLoading,setIsLoading]=useState(true)

    async function  getUsers(){
        let resp= await fetch(url);
        let jsonResp= await resp.json();
        setInterval(3000);
        setUsers(jsonResp);
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getUsers()
        setScreenSize(window.innerWidth)
    },[])

    useEffect(()=>{
        const resizeHandler=()=>{setScreenSize(window.innerWidth)}
        window.addEventListener("resize",resizeHandler)
        return ()=>{
            window.removeEventListener('resize',resizeHandler)
        }
    },[screenSize])

    return (
        <>
            <PageHeadComponent screenSize={screenSize} isShowing={isShowing} setIsShowing={setIsShowing}/>
            {isLoading? 
             <LoadingAnimation/> 
                :
                <div className="ex2-gitUsers-con">
                    <UserInput usersState={users} setUsersState={setUsers}></UserInput>
                    {isShowing ? <Users users={users}/>: <h1>Users are hidden</h1>} 
                </div>
            }      
        </> 
    )
}






export default Exercise2;