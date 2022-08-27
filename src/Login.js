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

    render(){
        return(
            <div>
                <h3>Login:</h3>
                <input name="username" value={this.state.username} onChange={this.loginEventHandler}/> <br/>
                <input name="password" type="password" value={this.state.password} onChange={this.loginEventHandler}/> <br/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.loginEventHandler}/> <br/>
            </div>
        )
    }
    
}