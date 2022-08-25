import React from "react";
import { Helloworld } from "./Helloworld";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return(
        <div>
            <h1>React app title</h1>
            <Helloworld />
            <Welcome />
        </div>
        )
    }
}
