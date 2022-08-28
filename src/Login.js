import React from "react";

export class Login extends React.Component{

    state = {
        username: '',
        password: '',
        remember: false
    }

    loginEventHandler = (event) => {
        this.setState((state)=>{
            return {[event.target.name]: event.target.type==="checkbox" ? event.target.checked : event.target.value}
        })
    }

    componentDidMount(){
        document.querySelector('#loginButton').setAttribute("disabled", 'true')
    }
    componentDidUpdate(){
        this.state.username===''|| this.state.password===''? document.querySelector('#loginButton').setAttribute("disabled", 'true') : document.querySelector('#loginButton').removeAttribute('disabled')
    }

    buttonEventHandler = (e) => {
        this.props.onLogin(this.state.username,this.state.password,this.state.remember)
    }

    resetEventHandler = ()=>{
        this.setState((state)=>{
            return {username: '', password: '', remember: false}
        })
    }

    render(){
        return(
            <div>
                <h3>Login:</h3>
                <input name="username" value={this.state.username} onChange={this.loginEventHandler}/> <br/>
                <input name="password" type="password" value={this.state.password} onChange={this.loginEventHandler}/> <br/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.loginEventHandler}/> <br/>
                <button type="button" id="loginButton" onClick={this.buttonEventHandler}>Login</button>
                <button type='reset' onClick={this.resetEventHandler}>Reset</button>
            </div>
        )
    }
    
}