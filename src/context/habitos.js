import { useState, createContext, useContext, useEffect } from "react";
import { AuthContext } from "./auth";
import { listarHabitos } from "../services/track";

export const HabitosContext = createContext({});

export default function HabitosProvider({ children }) {

    const { usuarioData } = useContext(AuthContext);

    const token = usuarioData ? usuarioData.token : ''

    const [data, setData] = useState()
    useEffect(
        () => {
            if (token) {
                const promise = listarHabitos(token);
                promise.then((res) => {
                    setData(res.data);
                }).catch(err => alert(err.response.data.message))
            }
        }, [token]);

    return (
        <HabitosContext.Provider value={{ data, setData }}>
            {children}
        </HabitosContext.Provider>
    )
}