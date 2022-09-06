import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Helloworld } from "./Helloworld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

const colorsArray = [
    {id: 1, name: 'red'},
    {id: 2, name: 'blue'},
    {id: 3, name: 'yellow'},
    {id: 4, name: 'black'}

]

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
        <Container title="React container prop title" >
            <h1>React app title</h1>
            <Helloworld />
            <Welcome age={17} name="John"/>
            <Counter initialValue={10} increment={5} interval={500}/>
            <ClickCounter />
            <ClickTracker />
            <InteractiveWelcome />
            <Login onLogin = {this.onLogin}/>
            <UncontrolledLogin />
            <Colors colorsArray={colorsArray} />

            <TodoList>
                {(items, remove)=>{
                return (
                <ul className="list-none uppercase">
                {items.map((item, index)=><li key={item+index}>{item}<button className="ml-10" id={item+index} onClick={remove}>Remove item</button></li>)}
                </ul>
                )}}
            </TodoList>

        </Container>
        )
    }
}
