import React from 'react'

export class Colors extends React.Component{

    render(){
        const array = this.props.colorsArray.map((item, index) => <li key={item.id}>{item.name}</li>)
        return(
            <div>
                <ul>
                {array}
                </ul>
            </div>
        )
    }

}