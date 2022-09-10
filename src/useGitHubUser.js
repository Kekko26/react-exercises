import {  useState } from "react"

export function useGitHubUser(){
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    async function fetchData(username){
            setLoading(true)
            setError(false)
    try{
        const fetching = await fetch(`https://api.github.com/users/${username}`)
        if(fetching.ok){
        const fetched = await fetching.json()
        setData(fetched)
        }
        else{
            throw new Error('User not found')
        }
    }
    catch(e){
        setError(true)
        setData(false)
    }
    finally{setLoading(false)}
        }

    return {
        data,
        error,
        loading,
        fetchData
    }

}