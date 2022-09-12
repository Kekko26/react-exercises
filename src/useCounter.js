import { useState } from "react"

export function useCounter(){
    const [count, setCounter] = useState(0)

    const incrementHandler = useCallback(function incrementHandler(){
        setCounter(state => {
            return state + 1
        })
    }, [])

    const decrementHandler = useCallback(function decrementHandler(){
        setCounter(state => {
            return state - 1
        })
    },[])

    const resetHandler = useCallback(function resetHandler(){
        setCounter(0)
    },[])

    
    return{
        count,
        incrementHandler,
        decrementHandler,
        resetHandler
    }
}