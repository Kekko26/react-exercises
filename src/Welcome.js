import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                {this.props.age>=18
                ? <Age age={this.props.age}/>
                : <p>You are very young!</p>
                }
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: <strong>Giorgio</strong>,
    // age: 40
}