import './TodoApp.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import AuthProvider from './security/AuthContext'


export default function TodoApp(){
    return (
        <div className='TodoApp'>            
            <div className="TodoApp">
                <AuthProvider>
                    <BrowserRouter>
                        <HeaderComponent/>
                        <Routes>
                            <Route path='/' element={<LoginComponent/>}/>
                            <Route path='/login' element={<LoginComponent/>}/>
                            <Route path='/welcome/:username' element={<WelcomeComponent/>}/>                  
                            <Route path='/todos' element={<ListTodosComponent/>}/>
                            <Route path='/logout' element={<LogoutComponent/>}/>

                            <Route path='*' element={<ErrorComponent/>}/>
                        </Routes>
                        <FooterComponent/>
                    </BrowserRouter>
                </AuthProvider>            
            </div>
            
        </div>
    )
}