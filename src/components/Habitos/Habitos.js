import { useLocation } from "react-router-dom"
import { Header, Botao, Footer } from "../common";
import { useEffect, useState } from "react";
import { listarHabitos } from "../../services/track";
import { FallingLines } from "react-loader-spinner"
import styled from "styled-components";
import NovoHabito from "./NovoHabito";

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
        }, [token])

    return (
        <HabitosWrapper>
            <Header image={image} />
            <div>
                <span>Meus hábitos</span>
                <Botao tamanho="pequeno">+</Botao>
            </div>
            <NovoHabito />
            <ul>
                {!data && <FallingLines
                    color="#126BA5" />}
                {data?.length > 0 && data.map((value, index) => <li key={index}>{value.name}</li>)}
                {data && data?.length === 0 &&
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a acompanhar!
                    </span>}
            </ul>
            <Footer />
        </HabitosWrapper >)
}

const HabitosWrapper = styled.main`
background-color:#f2f2f2;
padding: 70px 0px;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
ul{
    margin-top: 30px;
    display: flex;
    justify-content:center;
    width: 340px;
    span{
        color:#666666;
        font-size: 18px;
    }
}

div{
    margin-top: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    font-size: 29px;
    color:#126BA5;
    height: 40px;
    width: 340px;
}
`