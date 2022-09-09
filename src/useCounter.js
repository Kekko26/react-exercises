import { useState } from "react"

export function useCounter(){
    const [count, setCounter] = useState(0)

    function incrementHandler(){
        setCounter(state => {
            return state + 1
        })
    }
    function decrementHandler(){
        setCounter(state => {
            return state - 1
        })
    }
    function resetHandler(){
        setCounter(0)
    }

    
    return{
        count,
        incrementHandler,
        decrementHandler,
        resetHandler
    }
}