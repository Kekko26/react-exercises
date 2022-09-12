import React from "react";

export class Container extends React.Component{
    render(){
        return(
            <div className="border-1 border-solid rounded border-red-800 bg-red-400 text-center flex justify-center">
                <div className="flex items-center flex-col"><h1 className="text-blue-600">{this.props.title}</h1></div>
                <div className="flex items-center flex-col">{this.props.children}</div>
            </div>
        )

    }
}