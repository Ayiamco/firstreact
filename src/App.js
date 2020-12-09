import React, {useState,useEffect} from 'react'

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

    if(isLoading){
        return (
        <>
            <PageHeadComponent screenSize={screenSize} isShowing={isShowing} setIsShowing={setIsShowing}/>
           <LoadingAnimation/>   
        </>
        )}

    return (
        <>
            <PageHeadComponent screenSize={screenSize} isShowing={isShowing} setIsShowing={setIsShowing}/>
           <UserInput usersState={users} setUsersState={setUsers}></UserInput>
           {isShowing ? <Users users={users}/>: <h1>Users are hidden</h1>}   
        </>
    )
}

function PageHeadComponent({screenSize, isShowing, setIsShowing}){
    return (
        <>
            <h1>Exercise 2</h1>
            <br></br>
            <h3 style={{textAlign:"center"}}>Window Size: {screenSize}px</h3>
            <button  onClick={()=>{setIsShowing(!isShowing)}}>
                Show/Hide Github Users
            </button>
        </>
    )
}

function GithubUserCard({imgUrl,name,githubUrl}){
    //console.log({imgUrl,name,githubUrl})
    return(
    <section className="user-card">
        <div className="image-container">
            <img src={imgUrl} alt="user profile pic"></img>
        </div>
        <div className="user-info">
             <p>{name}</p>
             <a href={githubUrl} target="_black">Profile</a>
        </div>
    </section>
    )
}

function Users({users}){
    return (
        <div>
            <h3 style={{textAlign:"center",marginBottom:"-2em"}}>Github Users</h3>
            <div className="user-grid">
                {
                users.map((user,index)=>{
                    let id=new Date().getTime().toString()+index;
                    const {login,html_url, avatar_url}=user;
                    return <GithubUserCard key={id} imgUrl={avatar_url} name={login} githubUrl={html_url}/>
                })
            }
            </div>
        </div>
    )
}

function  LoadingAnimation(){
    return (
        <>
        <h6>Loading Users.........</h6>
        <div className="loader"></div>
    </>
    )
}

function UserInput({usersState,setUsersState}){
    let [username,setUsername]=useState('');
    let [isInputEmpty,setIsInputEmpty]=useState(false);
    async function handleSubmit(e){
        e.preventDefault();
        if(username){
            let userUrl="https://api.github.com/users/" + username;
                let resp =  await fetch(userUrl);
                let respJson = await resp.json()
                const {login,html_url, avatar_url}=respJson;
                setUsersState([
                        {login,html_url, avatar_url},...usersState
                        
                    ])
                setIsInputEmpty(false)
                    
        }
        else{setIsInputEmpty(true)}
            
    }
        
    const updateFormState=(e)=>{
        setUsername(e.target.value)
        if(e.target.value){
            setIsInputEmpty(false)
        }
        else{
            setIsInputEmpty(true)
        }
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                 
                <input placeholder="Enter Github Username" name="username" value={username} onChange={updateFormState}></input>
                {isInputEmpty?<p className="p-error">Feild is empty</p> : ""}
            </div>
            <button type="submit"> Get User </button>
        </form>
    ) 
}
export default App