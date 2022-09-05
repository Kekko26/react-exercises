import React from "react";

export class Container extends React.Component{
    render(){
        return(
            <div className="border-1 border-solid rounded border-red-800 bg-red-400">
                {this.props.children}
            </div>
        )
    }
}