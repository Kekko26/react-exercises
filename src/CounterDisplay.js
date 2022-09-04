import React from "react";

export class CounterDisplay extends React.Component{
    render(){
        const Mystyle = {
            backgroundColor: 'yellow',
            border: 'red 1px solid'
        }

        return <h1 style={Mystyle}>{this.props.counter}</h1>
    }
}