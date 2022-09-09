import { useEffect, useState } from "react";

export function GitHubUser(props){
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')

    useEffect(()=>{
        async function fetchData(){
        const data = await fetch(`https://api.github.com/users/${props.username}`)
        const fetched = await data.json()
        console.log(fetched);
        setName(()=>{return fetched.name})
        setBio(()=>{return fetched.bio})
        }
    fetchData()
    }, [props.username])

    return(
        <div>
            <h3>{props.username}'s Profile informations</h3>
            <p><strong>Profile real name:</strong> {name}</p>
            <p><strong>Profile bio:</strong> {bio}</p>
        </div>
    )
}