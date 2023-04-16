import { createContext, useState, useContext } from "react";
import { executeJWTAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

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

 /*   async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)
        console.log(baToken);

        try {
            const response = await executeBasicAuthenticationService(baToken)
            console.log('1: test');
            console.log(response.status);    

            if(response.status == 200){
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)

                //All request are interceptered here and add Header Authorization with token to each of API calls
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token');
                        config.headers.Authorization = baToken
                        return config
                    }
                )

                return true           
            } else {
                logout()
                return false            
            }
        } catch(error){
            logout()
            return false  
        }
    }*/

    async function login(username, password) {

        try {
            const response = await executeJWTAuthenticationService(username, password)
            console.log(response.status);    

            if(response.status == 200){

                const jwtToken = 'Bearer ' + response.data.token
                
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                //All request are interceptered here and add Header Authorization with token to each of API calls
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token');
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )

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

