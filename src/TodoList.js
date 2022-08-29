import React from "react";

export class TodoList extends React.Component{

    state = {
        input:'',
        items: [],
        newArray: []
    }

    inputChange = (event)=>{
        this.setState(()=>{
            return {input: event.target.value}
        })
    }
    
    addToListEvent = (event) =>{
        event.preventDefault()
        this.state.items.push(this.state.input)
        console.log(this.state.items);
        this.setState(()=>{
            return {newArray: this.state.items.map((item, index)=><li key={item+index}>{item}</li>)}
        }
        )
        this.setState(()=>{
            return {input:''}
        })
    }

    render(){
        return (
        <div>
            <input value={this.state.input} onChange={this.inputChange}/>
            <button onClick={this.addToListEvent}>Add to list</button>

            <ul>
            {this.state.newArray}
            </ul>
        </div>
        )
    }
}