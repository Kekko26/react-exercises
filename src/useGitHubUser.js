import { useEffect, useState } from "react"

export function useGitHubUser({username}){
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [error, setError] = useState(false)

    useEffect(()=>{
        async function fetchData(){
    try{
        const data = await fetch(`https://api.github.com/users/${username}`)
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
    }, [username])

    return {
        name, 
        bio,
        error
    }

}