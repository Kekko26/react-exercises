import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        counter: this.props.initialValue
    }

    componentDidMount(){
        setInterval(() => {
            this.setState((state)=>{
                   return this.state.counter + this.props.increment > (this.props.initialValue*10)
                    ? {counter: this.props.initialValue}
                    : {counter: state.counter + this.props.increment}
                    
            })
        }, this.props.interval);
    }

    //IL CONSTRUCTOR NON SERVE PIU' PERCHE NON MI SERVE ELABORARE NULLA PRIMA CHE VENGA RENDERIZZATO A SCHERMO, POSSO FARLO DOPO IL 
    //MOUNTING QUINDI POSSO TOGLIERE IL CONSTRUCTOR

    render(){
        return <CounterDisplay counter={this.state.counter}/>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    increment: 1,
    interval: 1000
}