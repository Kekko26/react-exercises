import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        counter: this.props.initialValue
    }

    constructor(props){
        super(props)
        
        setInterval(() => {
            this.setState((state)=>{
                   return this.state.counter + this.props.increment > (this.props.initialValue*10)
                    ? {counter: this.props.initialValue}
                    : {counter: state.counter + this.props.increment}
                    
            })

            // METODO ALTERNATIVO PIU LEGGIBILE MA PROLISSO, PERCHE SE METTO DUE RETURN NEL METODO PRECEDENTE MI DA ERRORE E INVECE CON IF ELSE POSSO?
            // this.setState((state)=>{
            //     if(this.state.counter+this.props.increment > this.props.initialValue*10){
            //         return state.counter = this.props.initialValue
            //     }
            //     else{
            //         return state.counter = state.counter+this.props.increment
            //     }   
            //  })


        }, this.props.interval);
    }
    render(){
        return <CounterDisplay counter={this.state.counter}/>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    increment: 1,
    interval: 1000
}