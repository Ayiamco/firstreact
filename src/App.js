import React, {useState,useEffect} from 'react'
import GithubUserCard from './js/GithubUserCard'

import './css/app.css'

const url ="https://api.github.com/users"
function App(){

    let [users,setUsers]=useState([])
    let [screenSize,setScreenSize]=useState("");
    let [isShowing,setIsShowing]=useState(true)
    let [isLoading,setIsLoading]=useState(true)

    async function  getUsers(){
        let resp= await fetch(url);
        let jsonResp= await resp.json();
        setUsers(jsonResp);
        
        
    }
    
    useEffect(()=>{
        getUsers()
        setScreenSize(window.innerWidth)
        setTimeout(()=>{
            setIsLoading(false)
        },10000)
        console.log("User State was called")
        
        
    },[])

    useEffect(()=>{
        function resizeHandler(){
            setScreenSize(window.innerWidth)
        }

        window.addEventListener("resize",resizeHandler)
        // return ()=>{
        //     window.removeEventListener('resize',resizeHandler)
        // }
    },[screenSize])

    if(isLoading){
        return (
        <>
            <h1>Exercise 2</h1>
            <br></br>
            <h3 style={{textAlign:"center"}}>Window Size: {screenSize}px</h3>
            <button style={{
                width:"20em",margin:"auto",
                display:"block",padding:"0.5em",
                marginBottom:"2em",cursor:"pointer"}}
                className="btn" onClick={()=>{setIsShowing(!isShowing)}}>
                Show/Hide Github Users
            </button>
           <h1>Loading Github Users............</h1>   
        </>
        )}

    return (
        <>
            <h1>Exercise 2</h1>
            <br></br>
            <h3 style={{textAlign:"center"}}>Window Size: {screenSize}px</h3>
            <button style={{
                width:"20em",margin:"auto",
                display:"block",padding:"0.5em",
                marginBottom:"2em",cursor:"pointer"}}
                className="btn" onClick={()=>{setIsShowing(!isShowing)}}>
                Show/Hide Github Users
            </button>
        
           {isShowing ? <div>
            <h3 style={{textAlign:"center",marginBottom:"-2em"}}>Github Users</h3>
            <div className="user-grid">
                {
                users.map((user)=>{
                    const {id,login,html_url, avatar_url}=user;
                    return <GithubUserCard key={id} imgUrl={avatar_url} name={login} githubUrl={html_url}/>
                })
            }
            </div>
           </div>: <h1>Users are hidden</h1>
           } 
            
            
        </>
    )
}

export default App