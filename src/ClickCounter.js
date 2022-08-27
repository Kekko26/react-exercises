import React from "react";

export class ClickCounter extends React.Component{
    state = {
        count: 0
    }

    clickButtonEventHandler = () =>{
        this.setState((state) =>{
        return {count: state.count + 1}
        })
    }

    render(){
        return (
            <div>
                <h3>Count of clicks: {this.state.count}</h3>
                <button onClick={this.clickButtonEventHandler}>Increment counter</button>
            </div>
        )
    }

}