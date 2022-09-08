import React, { useState } from "react";


export function TodoList(){

    let [inputValue, setInput] = useState('')
    const [list, setList] = useState([])

    function inputChange(event){
        setInput(prev =>{
            return event.target.value
        })
    }  

    function buttonClick(){
        setList(prev => {
           return [...prev, inputValue]
        })
        setInput(()=> {return ''})
    }



    return (
        <div>
            <input name="listInput" onChange={inputChange} value={inputValue}/>
            <button onClick={buttonClick} >Add to list</button>
            <ul>
            {list.map( (item, index) => { return (<li key={item+index}>{item}</li>)})}
            </ul>
        </div>
    )
}







// export class TodoList extends React.Component{

//     state = {
//         input:'',
//         items: [],
//         newArray: []
//     }

//     inputChange = (event)=>{
//         this.setState(()=>{
//             return {input: event.target.value}
//         })
//     }
    
//     addToListEvent = (event) =>{
//         event.preventDefault()
//         this.state.items.push(this.state.input)
//         this.setState(()=>{
//             return {input:''}
//         })
//     }

//     removeItemEvent =  (e)=>{
//         e.preventDefault()
//         this.setState({
//         items: this.state.items.filter( (item, index) => item+index!==e.target.id),
//         }
//         )
//     }

//     resetListEvent = (e)=>{
//         this.setState(()=>{
//             e.preventDefault()
//             return {items: [], newArray:[]}
//         }
//         )
//     }

//     render(){
//         return (
//         <div>
//             <input value={this.state.input} onChange={this.inputChange}/>
//             <button onClick={this.addToListEvent}>Add to list</button>
//             <button onClick={this.resetListEvent}>Reset the list</button>

//             {this.props.children(this.state.items, this.removeItemEvent)}
//         </div>
//         )
//     }
// }