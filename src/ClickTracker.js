import React from "react";

export class ClickTracker extends React.Component{

    clickTrackerEventHandler = (e)=>{
        // console.log(e.target.innerText);
        this.setState((state)=>{
            return {lastButton: e.target.innerText}
        })
    }

    state = {
        lastButton: null
    }

    render(){
        return (
            <div>
            <button onClick={this.clickTrackerEventHandler}>First Button</button>
            <button onClick={this.clickTrackerEventHandler}>Second Button</button>
            <button onClick={this.clickTrackerEventHandler}>Third Button</button>
            {this.state.lastButton ? <h1>The last clicked button was the {this.state.lastButton}</h1> : <h1>You didn't click a button yet</h1>}
            </div>
        )
    }


}