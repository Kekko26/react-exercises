import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

// import { GitHubUser } from "./GitHubUser"
// import { ShowGitHubUser } from "./ShowGitHubUser"

export function GitHubUsersList(){
    const [usersList, setUsersList] = useState([])


    const [username, setUsername] = useState('')
    function inputChange(event){
        setUsername(()=>{return event.target.value})
    }

    function userListPush(){
        setUsersList((prev)=>{return [...prev, username]})
        setUsername(()=>{return ''})
    }

    return(
        <div>
            <input name={'username'} onChange={inputChange} value={username}/>
            <button onClick={userListPush}>Add user</button>
            <ul className="list-none pl-0 ">
                {usersList.map((item,index) => {
                    return (
                    <li key={item+index} className="mb-1"><Link className="no-underline text-red-600" to={`/users/${item}`}>{item}</Link></li>
                    )
                })}
            </ul>
            <Outlet/>
        </div>
    )
}