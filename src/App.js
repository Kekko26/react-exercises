import React from "react";
import { Counter } from "./Counter";
import { Helloworld } from "./Helloworld";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return(
        <div>
            <h1>React app title</h1>
            <Helloworld />
            <Welcome age={17} name="John"/>
            <Counter initialValue={10} increment={5} interval={2000}/>
        </div>
        )
    }
}
