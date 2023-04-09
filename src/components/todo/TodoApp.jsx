import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>            
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('dummy')
    const [showSuccessMessage, setshowSuccessMessage] = useState(false)
    const [showErrorMessage, setshowErrorMessage] = useState(false)
    const navigate = useNavigate()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChage(event){
       {/* console.log(event.target.value);*/}
        setPassword(event.target.value)     
    }

    function handleSubmit(){
        console.log(username);
        console.log(password);
        if(username==='in28minutes' && password==='dummy'){
            console.log('Success');
            setshowSuccessMessage(true)
            setshowErrorMessage(false)
            navigate('/welcome')
        } else {
            console.log('Authentification');
            setshowSuccessMessage(false)
            setshowErrorMessage(true)
        }
    }

 /*}   function SuccessMessageComponent() {
        if(showSuccessMessage){
            return (
                <div className='successMessage'>Authenticated Successfully</div>
            )
        } else {
            return null
        }
        
    }

    function ErrorMessageComponent() {
        if(showErrorMessage){
            return (
                <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>
            )
        } else {
            return null
        }
        
    }*/

    return(
        <div className="Login">
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>}
            {/*<SuccessMessageComponent/>
            <ErrorMessageComponent/>*/}

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
                <button type="button" name="login" onClick={handleSubmit}>login</button>
            </div>
        </div>
    )
}


function WelcomeComponent() {
    return(
        <div className="Welcome">
            WelcomeComponent
        </div>
    )
}