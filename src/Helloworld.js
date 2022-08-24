import React from 'react'
import { Message } from './Message'
export class Helloworld extends React.Component{
    render(){
        return (
        <div>
        <h1>Hello, world!</h1>
        <Message />
        </div>
        )
    }
}