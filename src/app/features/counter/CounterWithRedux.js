import { useSelector, useDispatch} from "react-redux"
import { increment, decrement, reset } from "./counterReducer"

export function CounterWithRedux(){
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
        </div>
    )
}