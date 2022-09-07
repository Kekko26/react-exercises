import React, { useState } from "react";
import { CounterButton } from "./CounterButton";

export function ClickCounter(){

    const [count, setCounter] = useState(0)

    function clickButtonEventHandler(){
        setCounter(state => {
            return state + 1
        })
    }

    return(
        <div>
            <h3>Count of clicks: {count}</h3>
            <CounterButton onClick={clickButtonEventHandler}/>
        </div>
    )
}

// export class ClickCounter extends React.Component{
//     state = {
//         count: 0
//     }

//     clickButtonEventHandler = () =>{
//         this.setState((state) =>{
//         return {count: state.count + 1}
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <h3>Count of clicks: {this.state.count}</h3>
//                 <CounterButton onClick={this.clickButtonEventHandler}/>
//             </div>
//         )
//     }

// }