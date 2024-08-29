import { useLocation } from "react-router-dom"
import { Header } from "../common";
import { useEffect, useState } from "react";
import { listarHabitos } from "../../services/track";
import { FallingLines } from "react-loader-spinner"
import styled from "styled-components";

export default function Habitos() {
    const location = useLocation()
    const { id, name, image, token } = location.state;

    const [data, setData] = useState();

    useEffect(
        () => {
            const promise = listarHabitos(token);
            promise.then((res) => {
                setData(res.data);
            })
        }, [data])

    return (
        <HabitosWrapper>
            <Header image={image} />
            <ul>
                {!data && <FallingLines />}
                {data?.length > 0 && data.map((value, index) => <li key={index}>{value.name}</li>)}
                {data && data?.length === 0 &&
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a acompanhar!
                    </span>}
            </ul>
        </HabitosWrapper >)
}

const HabitosWrapper = styled.main`
margin-top:70px;
background-color: red;
`