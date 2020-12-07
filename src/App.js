import React, {useState,useEffect} from 'react'
import GithubUserCard from './js/GithubUserCard'

import './css/app.css'

const url ="https://api.github.com/users"
function App(){

    let [users,setUsers]=useState([])

    async function  getUsers(){
        let resp= await fetch(url);
        let jsonResp= await resp.json();
        setUsers(jsonResp)
        
    }
    useEffect(()=>{
        getUsers()
    },[])

    return (
        <>
            <h1>Exercise 2</h1>
            <h3>Github Users</h3>
            <div className="user-grid">
                {
                users.map((user)=>{
                    const {id,login,html_url, avatar_url}=user;
                    return <GithubUserCard key={id} imgUrl={avatar_url} name={login} githubUrl={html_url}/>
                })
            }
            </div>
            
        </>
    )
}

export default App