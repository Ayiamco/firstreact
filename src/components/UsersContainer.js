import {React} from "react";

export function UsersContainer({users}){
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