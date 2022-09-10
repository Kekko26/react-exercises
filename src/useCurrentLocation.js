import { useState } from "react";

export function useCurrentLocation(){
    const [currentPosition, setCurrentPosition] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    function throwError(){
        setError(true)
        setLoading(false)
        throw new Error('Position unreachable')
    }
    function success(result){
        setCurrentPosition(result)
        setLoading(false)
    }

    function getPosition(){
        setLoading(true)
        setError(false)
        navigator.geolocation.watchPosition(success, throwError)
}
    return{
        currentPosition,
        loading,
        error,
        getPosition
    }
}