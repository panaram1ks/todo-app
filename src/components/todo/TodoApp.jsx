import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate,useParams } from 'react-router-dom'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>                  
                    <Route path='/todos' element={<ListTodosComponent/>}/>

                    <Route path='*' element={<ErrorComponent/>}/>
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
            navigate(`/welcome/${username}`)
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
            <h1>Time to Login</h1>
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

    /*const params = useParams()
    console.log(params.username);*/
    const {username} = useParams()
    console.log(username);

    return(
        <div className="WelcomeComponent">
            <h1>Welcom {username}</h1>
            <div>
                WelcomeComponent
            </div>
        </div>
    )
}

function ErrorComponent() {
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.</div>
        </div>
    )
}

function ListTodosComponent() {
    const todos = [
                    {id: 1, description: 'Learn AWS'},
                    {id: 2, description: 'Learn DevOps'},
                    {id: 3, description: 'Learn Full Stack Dev'},
                    {id: 4, description: 'Learn Docker'},
                ]

    return(
        <div className="ListTodosComponent(">
            <h1>Things You Want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                                )
                            )
                        }                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}