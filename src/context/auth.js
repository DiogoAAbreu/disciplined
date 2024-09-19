import { useState, createContext } from "react";

export const AuthContext = createContext({})


export default function AuthProvider({ children }) {

    const [usuarioData, setUsuarioData] = useState({
        token: '',
        image: ''
    });


    return (
        <AuthContext.Provider value={{ usuarioData, setUsuarioData }}>
            {children}
        </AuthContext.Provider>
    )
}