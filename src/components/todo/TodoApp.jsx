import './TodoApp.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import AuthProvider from './security/AuthContext'
import { useAuth } from './security/AuthContext'


function AuthenticatedRout({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated){
        return children
    } else {
        return <Navigate to="/"></Navigate>
    }   
}

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
                            
                            
                            <Route path='/welcome/:username' element={
                                <AuthenticatedRout>
                                    <WelcomeComponent/>
                                </AuthenticatedRout>                            
                            }/>                  
                            <Route path='/todos' element={
                                <AuthenticatedRout>
                                    <ListTodosComponent/>
                                </AuthenticatedRout>  
                            }/>
                            
                            <Route path='/logout' element={
                                <AuthenticatedRout>
                                    <LogoutComponent/>
                                </AuthenticatedRout> 
                            }/>

                            
                            <Route path='*' element={<ErrorComponent/>}/>
                        </Routes>
                        <FooterComponent/>
                    </BrowserRouter>
                </AuthProvider>            
            </div>
            
        </div>
    )
}