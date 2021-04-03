import React,{useState} from "react";

export function UserInput({usersState,setUsersState}){
    let [username,setUsername]=useState('');
    let [shouldErrorDisplay,setShouldErrorDisplay]=useState(false);
    let [errorMessage,setErrorMessage]=useState("")
    
    async function handleSubmit(e){
        e.preventDefault();
        if(username){
            let userUrl="https://api.github.com/users/" + username;
                let resp =  await fetch(userUrl);
                if(resp.status===404){
                    setErrorMessage("User does not exist");
                    setShouldErrorDisplay(true)
                    return;
                }
                let respJson = await resp.json();
                const {login,html_url, avatar_url}=respJson;
                setUsersState([
                        {login,html_url, avatar_url},...usersState
                        
                    ])
                setShouldErrorDisplay(false)
                    
        }
        else{
            setShouldErrorDisplay(true);
            setErrorMessage("Username feild is empty")
        }
            
    }
        
    const updateFormState=(e)=>{
        setUsername(e.target.value)
        setShouldErrorDisplay(false);
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                 
                <input className="ex2-input"placeholder="Enter Github Username" name="username" value={username} onChange={updateFormState}></input>
                {shouldErrorDisplay?<p className="p-error">{errorMessage}</p> : ""}
            </div>
            <button type="submit" className="Exercise2-button"> Get User </button>
        </form>
    ) 
}