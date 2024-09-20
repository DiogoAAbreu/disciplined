import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({})


export default function AuthProvider({ children }) {

    const [usuarioData, setUsuarioData] = useState(JSON.parse(localStorage.getItem('usuarioData')));

    useEffect(() => {
        localStorage.setItem("usuarioData", JSON.stringify(usuarioData))
    }, [usuarioData])

    return (
        <AuthContext.Provider value={{ usuarioData, setUsuarioData }}>
            {children}
        </AuthContext.Provider>
    )
}