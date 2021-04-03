
import {GithubUserCard} from "./GithubUserCard";

export function Users({users}){
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

export function  LoadingAnimation(){
    return (
        <>
        <div className="loader"></div>
    </>
    )
}