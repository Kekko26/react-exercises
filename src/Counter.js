import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        counter: this.props.initialValue
    }


    render(){
        return <CounterDisplay counter={this.state.counter}/>
    }

    componentDidMount(){
        this._interval = setInterval(() => { //PERCHE DEVO CHIAMARLA CON L'UNDERSCORE LA VARIABILE _INTERVAL?
            this.setState((state)=>{
                   return {counter: state.counter + this.props.increment}
                    
            })
        }, this.props.interval);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.counter > this.props.initialValue*10){
            this.setState((state)=>{
               return {counter: this.props.initialValue}
            })
        }
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