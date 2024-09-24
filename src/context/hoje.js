import { createContext, useState, useEffect, useContext } from "react";
import { listarHabitosHoje } from "../services/track";
import { AuthContext } from "./auth";
import { HabitosContext } from "./habitos";

export const HojeContext = createContext({});

export default function HojeProvider({ children }) {
    const [habitos, setHabitos] = useState([]);
    const [habitosConcluidos, setHabitosConcluidos] = useState([]);
    const { usuarioData } = useContext(AuthContext)
    const { data } = useContext(HabitosContext)

    const token = usuarioData ? usuarioData.token : '';

    useEffect(() => {
        if (token) {
            const promise = listarHabitosHoje(token)
            promise.then(res => {
                setHabitos(res.data);
                setHabitosConcluidos(res.data.filter(value => value.done === true))
            })
        }
    }, [data, habitosConcluidos, token])
    return (
        <HojeContext.Provider value={{
            habitos,
            habitosConcluidos,
            setHabitosConcluidos,
            porcentagemConcluida: (100 / habitos.length) * habitosConcluidos.length
        }}>
            {children}
        </HojeContext.Provider>
    )
}