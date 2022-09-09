import { useEffect, useState } from "react";

export function GitHubUser(props){
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [error, setError] = useState(false)

    useEffect(()=>{
        async function fetchData(){
    try{
        const data = await fetch(`https://api.github.com/users/${props.username}`)
        if(data.ok){
        const fetched = await data.json()
        setName(()=>{return fetched.name})
        setBio(()=>{return fetched.bio})
        }
        else{
            throw new Error('User not found')
        }
    }
    catch(e){
        setError(()=>{return true})
    }
        }
    fetchData()
    }, [props.username])

    return(
        <div className=" border-1 border-white-300 border-solid m-5 p-5">
            {error ? <h3>User not found</h3> 
            : <div>
            <h3>{props.username}'s Profile informations</h3>
            <p><strong>Profile real name:</strong> {name ? name: 'this user has no real name'}</p>
            <p><strong>Profile bio:</strong> {bio ? bio : 'this user has no bio'}</p>
            </div>}
        </div>
    )
}