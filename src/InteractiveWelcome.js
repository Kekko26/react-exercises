import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    
    state = {
        username: '',
    }

    InputChangeEvent = (event)=>{
        this.setState((state)=>{
           return {[event.target.name]: event.target.value}
        })
    }

    render(){
        return (
            <div>
                <input name='username' value={this.state.username} onChange={this.InputChangeEvent}/>
                <Welcome name={this.state.username}/>
            </div>
        )
    }
}