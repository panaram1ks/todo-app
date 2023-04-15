import { createContext, useState, useContext } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

// 1: Create a Context
export const AuthContext = createContext()

// create simple hook to use context everywhere
export const useAuth = () => useContext(AuthContext)

// 2:  Share the created context with other components
export default function AuthProvider({children}){

    // 3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

 /*   function login(username, password) {
        if(username==='in28minutes' && password==='dummy'){
            setAuthenticated(true)
            setUsername(username)
            return true           
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false            
        }
    }*/

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)
        console.log(baToken);

        try {
            const response = await executeBasicAuthenticationService(baToken)
            /* .then(response => console.log('2: ' + response))
                .catch(error=> console.log(error) )*/
            console.log('1: test');
            console.log(response.status);    

            if(response.status == 200){
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                return true           
            } else {
                logout()
                return false            
            }
        } catch(error){
            logout()
            return false  
        }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token} }>
            {children}
        </AuthContext.Provider>
    )
}

