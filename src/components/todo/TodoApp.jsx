import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <LoginComponent/>
           {/*<WelcomeComponent/>*/}
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('dummy')

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChage(event){
        console.log(event.target.value);
        setPassword(event.target.value)
    }

    return(
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChage}/>
                </div>
            </div>
            <div>
                <button type="button" name="login">login</button>
            </div>
        </div>
    )
}

function WelcomeComponent(){
    return(
        <div className="Welcome">
            WelcomeComponent
        </div>
    )
}