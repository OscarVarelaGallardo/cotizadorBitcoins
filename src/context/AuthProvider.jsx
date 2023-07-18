import { createContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({
        'nombre': '',
        'apellidos': '',
        'pro': false

    })

 
    return (
        <AuthContext.Provider value={{ 
            isAuth,
            setIsAuth,
            user,
            setUser
            }} >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext