import { useState, createContext, useContext, useEffect } from "react";
import { AuthContext } from "./auth";
import { listarHabitos } from "../services/track";

export const HabitosContext = createContext({});

export default function HabitosProvider({ children }) {

    const { usuarioData } = useContext(AuthContext);

    const [data, setData] = useState()
    useEffect(
        () => {
            const promise = listarHabitos(usuarioData.token);
            promise.then((res) => {
                setData(res.data);
            }).catch(err => alert(err.response.data.message))
        }, [usuarioData.token]);

    return (
        <HabitosContext.Provider value={{ data, setData }}>
            {children}
        </HabitosContext.Provider>
    )
}