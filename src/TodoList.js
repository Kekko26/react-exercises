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
        this.setState(()=>{
            return {input:''}
        })
    }

    removeItemEvent =  (e)=>{
        e.preventDefault()
        this.setState({
        items: this.state.items.filter( (item, index) => item+index!==e.target.id),
        }
        )
    }

    resetListEvent = (e)=>{
        this.setState(()=>{
            e.preventDefault()
            return {items: [], newArray:[]}
        }
        )
    }

    render(){
        return (
        <div>
            <input value={this.state.input} onChange={this.inputChange}/>
            <button onClick={this.addToListEvent}>Add to list</button>
            <button onClick={this.resetListEvent}>Reset the list</button>

            {this.props.children(this.state.items, this.removeItemEvent)}
        </div>
        )
    }
}