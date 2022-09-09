import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({initialValue = 0, increment = 10, interval = 3000}){

    const [counter, setCounter] = useState(initialValue)

    useEffect(()=>{
        const _interval = setInterval(() => {
            setCounter((prev)=>prev===initialValue*10 ? prev = initialValue : prev+increment)
        }, interval)

        return()=>{clearInterval(_interval)}
    },[increment, interval, initialValue])


    return(
        <CounterDisplay counter={counter}/>
    )
}


// export class Counter extends React.Component{
//     state = {
//         counter: this.props.initialValue
//     }


//     render(){
//         return <CounterDisplay counter={this.state.counter}/>
//     }

//     componentDidMount(){
//         this._interval = setInterval(() => { //PERCHE DEVO CHIAMARLA CON L'UNDERSCORE LA VARIABILE _INTERVAL?
//             this.setState((state)=>{
//                    return {counter: state.counter + this.props.increment}
                    
//             })
//         }, this.props.interval);
//     }

//     componentDidUpdate(prevProps, prevState){
//         if(this.state.counter > this.props.initialValue*10){
//             this.setState((state)=>{
//                return {counter: this.props.initialValue}
//             })
//         }
//     }

//     componentWillUnmount(){
//         if(this._interval){
//             clearInterval(this._interval);
//         }
//     }
// }

// Counter.defaultProps = {
//     initialValue: 0,
//     increment: 1,
//     interval: 1000
// }