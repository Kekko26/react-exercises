import { useCounter } from "./useCounter";

export function CounterWithCustomHook(){
    const {count, incrementHandler, decrementHandler, resetHandler} = useCounter()

    return(
        <div>
            <h3>Count of clicks: {count}</h3>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}