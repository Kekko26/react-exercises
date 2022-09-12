import React, { useEffect, useRef, useState } from "react";

export function Login(props){

    const [form, setForm] = useState({username: '', password: '', remember: false})

    const inputReference = useRef(null)

    useEffect(()=>{inputReference.current.focus()}, [])

     function inputEvemtHandler(event){    
        setForm(prev => {
            const {name, type, value, checked} = event.target
            return {...prev, [name]: type==='checkbox' ? checked : value}
        })

    }

    function loginHandler(e){
        e.preventDefault()
        props.onLogin(form);
    }

    function resetHandler(e){
        e.preventDefault()
        setForm({username: '', password: '', remember: false})
    }




    return (
        <form>
            <input ref={inputReference} name="username" onChange={inputEvemtHandler} value={form.username}/> 
            <input name="password" onChange={inputEvemtHandler} value={form.password} type='password' />
            <input name="remember" onChange={inputEvemtHandler} checked={form.remember} type='checkbox'/>  
            {!form.username || !form.password 
                ? <button disabled>Login</button> 
                : <button onClick={loginHandler}>Login</button>}
            <button onClick={resetHandler}>Reset</button>
        </form>
    )
}



// export class Login extends React.Component{

//     state = {
//         username: '',
//         password: '',
//         remember: false
//     }

//     loginEventHandler = (event) => {
//         this.setState((state)=>{
//             return {[event.target.name]: event.target.type==="checkbox" ? event.target.checked : event.target.value}
//         })
//     }

//     componentDidMount(){
//         document.querySelector('#loginButton').setAttribute("disabled", 'true')
//     }
//     componentDidUpdate(){
//         this.state.username===''|| this.state.password===''? document.querySelector('#loginButton').setAttribute("disabled", 'true') : document.querySelector('#loginButton').removeAttribute('disabled')
//     }

//     buttonEventHandler = (e) => {
//         this.props.onLogin(this.state.username,this.state.password,this.state.remember)
//     }

//     resetEventHandler = ()=>{
//         this.setState((state)=>{
//             return {username: '', password: '', remember: false}
//         })
//     }

//     render(){
//         const Mystyle = {
//             backgroundColor: this.state.password.length<8 ? 'red' : 'green',
//             color: 'yellow',
//             fontWeight: 'bold',
//         }
//         return(
//             <div>
//                 <h3>Login:</h3>
//                 <input name="username" value={this.state.username} onChange={this.loginEventHandler}/> <br/>
//                 <input name="password" type="password" value={this.state.password} onChange={this.loginEventHandler}/> <br/>
//                 <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.loginEventHandler}/> <br/>
//                 <button style={Mystyle} type="button" id="loginButton" onClick={this.buttonEventHandler}>Login</button>
//                 <button type='reset' onClick={this.resetEventHandler}>Reset</button>
//             </div>
//         )
//     }
    
// }