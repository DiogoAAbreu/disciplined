import { useState, createContext } from "react";

export const HabitosContext = createContext({});

export default function HabitosProvider({ children }) {

    const [data, setData] = useState()

    return (
        <HabitosContext.Provider value={{ data, setData }}>
            {children}
        </HabitosContext.Provider>
    )
}