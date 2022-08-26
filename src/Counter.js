import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        counter: this.props.initialValue
    }

    componentDidMount(){
        this._interval = setInterval(() => { //PERCHE DEVO CHIAMARLA CON L'UNDERSCORE LA VARIABILE _INTERVAL?
            this.setState((state)=>{
                   return this.state.counter + this.props.increment > (this.props.initialValue*10)
                    ? {counter: this.props.initialValue}
                    : {counter: state.counter + this.props.increment}
                    
            })
        }, this.props.interval);
    }

    render(){
        return <CounterDisplay counter={this.state.counter}/>
    }

    componentWillUnmount(){
        if(this._interval){
            clearInterval(this._interval);
        }
    }
}

Counter.defaultProps = {
    initialValue: 0,
    increment: 1,
    interval: 1000
}