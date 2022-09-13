import {  useCallback, useEffect, useState } from "react"

export function useGitHubUser(username){
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

const fetching = useCallback(async function fetchData(){
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
    }, [username])
    

    useEffect(()=>{

    fetching()

    },[fetching])

    return {
        data,
        error,
        loading
    }


}