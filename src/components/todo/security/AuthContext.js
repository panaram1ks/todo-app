import { createContext, useState, useContext } from "react";

// 1: Create a Context
export const AuthContext = createContext()

// create simple hook to use context everywhere
export const useAuth = () => useContext(AuthContext)

// 2:  Share the created context with other components
export default function AuthProvider({children}){

    // Put some state in the context
    const [number, setNumber] = useState(0)

    setInterval(() => setNumber(number + 1) , 3 * 1000)

    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )
}

