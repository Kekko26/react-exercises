import React from "react";

export class Age extends React.Component{
    render(){
        // return <p>Your age is {this.props.age}</p>
        return(
            <div>
            {this.props.age>=18
            ? <Age age={this.props.age}/>
            : <p>You are very young!</p>
            }
            </div>
        )
    }
}