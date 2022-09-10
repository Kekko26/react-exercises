import React, { useState } from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { CounterWithCustomHook } from "./CounterWithCustomHook";
import { CurrentLocation } from "./CurrentLocation";
import { DisplayLanguage } from "./DisplayLanguage";
import { GitHubUser } from "./GitHubUser";
import { GitHubUsersList } from "./GitHubUsersList";
import { Helloworld } from "./Helloworld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Contesto } from './LanguageContext'
import { Login } from "./Login";
import { LoginWithCustomHook } from "./LoginWithCustomHook";
import { Sum } from "./Sum";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

const colorsArray = [
    {id: 1, name: 'red'},
    {id: 2, name: 'blue'},
    {id: 3, name: 'yellow'},
    {id: 4, name: 'black'}

]

export function App(){
    
    const [language, setLanguage] = useState('en')

    function OnLanguageChange(event){
        setLanguage(event.target.value)
    }

    function onLogin({username, password, remember}){
        console.log({
            username,
            password,
            remember
        });
    }

    function onCounterChange(counter){
        console.log(`The counter is: ${counter}`);
    }

    const [unmounter, setUnmounter] = useState(true)
     function exp(ev){
       setUnmounter((prev)=> !prev)
    }

        return(
        <Container title="React container prop title" >

            <h1>React app title</h1>
            <Helloworld />
            <Welcome age={17} name="John"/>
            <button onClick={exp}>toggle</button>
            {unmounter && <Counter initialValue={5} increment={5} interval={1000}/>}
            <ClickCounter onCounterChange={onCounterChange}/>
            <ClickTracker />
            <InteractiveWelcome />
            <Login onLogin = {onLogin}/>
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

            <Contesto.Provider value={language}>
                <div className="border-1 border-solid border-yellow-500 bg-yellow-200 p-10">
                    <select value={language} onChange={OnLanguageChange}>
                        <option value={'en'}>English</option>
                        <option value={'it'}>Italiano</option>
                    </select>
                    <DisplayLanguage/>
                </div>
            </Contesto.Provider>

            <Sum/>

            <GitHubUser username={'Kekko26'} />
            
            <GitHubUsersList />

            <CounterWithCustomHook />

            <LoginWithCustomHook />

            <CurrentLocation />
        </Container>
        )
}
