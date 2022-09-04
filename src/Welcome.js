import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return (
            <div className="welcome">
                <p>Welcome, {this.props.name}!</p>
                {this.props.age<65 && this.props.name==="John" && <Age age={this.props.age}/>}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: <strong>Giorgio</strong>,
    // age: 40
}