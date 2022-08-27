import React from "react";

export class CounterButton extends React.Component{
    render(){
        return <button onClick={this.props.onClick}>Increment counter</button>
    }
}