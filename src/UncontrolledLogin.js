import React from "react";

export class UncontrolledLogin extends React.Component{

    _reference = React.createRef()

    submitHandler = (event) =>{
        event.preventDefault()
        console.log({
            username: event.target.elements.username.value,
            password: event.target.elements.password.value,
            remember: event.target.elements.remember.checked
        })
    }

    componentDidMount(){        
        document.querySelector('#loginButton2').setAttribute("disabled", 'true')
    }

    loginCheck = ()=>{
        this._reference.current.username.value === '' ||  this._reference.current.password.value === '' ? document.querySelector('#loginButton2').setAttribute("disabled", 'true') : document.querySelector('#loginButton2').removeAttribute('disabled')
    }

    resetLoginButton = ()=>{
        document.querySelector('#loginButton2').setAttribute("disabled", 'true')
    }

    render(){
        return(

            <form ref={this._reference} onSubmit={this.submitHandler} onChange={this.loginCheck}>
                <h3>Login:</h3>
                <input name = 'username' /> <br/>
                <input name = 'password' type='password'/> <br/>
                <input name = 'remember' type='checkbox' /> <br/>
                <button type = 'submit' id='loginButton2'>Login</button>
                <button type = 'reset' onClick={this.resetLoginButton}>Reset</button>
            </form>
        )
    }
}