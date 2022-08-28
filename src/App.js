import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Helloworld } from "./Helloworld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export class App extends React.Component{

    onLogin = (username, password, remember)=>{
        console.log({
            username,
            password,
            remember
        });
    }

    render(){
        return(
        <div>
            <h1>React app title</h1>
            <Helloworld />
            <Welcome age={17} name="John"/>
            <Counter initialValue={10} increment={5} interval={500}/>
            <ClickCounter />
            <ClickTracker />
            <InteractiveWelcome />
            <Login onLogin = {this.onLogin}/>
        </div>
        )
    }
}
