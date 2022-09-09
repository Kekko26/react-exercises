import { useState } from "react"
import { GitHubUser } from "./GitHubUser"

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
            {usersList.map(item => {
                return <GitHubUser username={item} />
            })}
        </div>
    )
}