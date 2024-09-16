import { useLocation } from "react-router-dom"
import { Header, Botao, Footer } from "../common";
import { useEffect, useState } from "react";
import { listarHabitos } from "../../services/track";
import { FallingLines } from "react-loader-spinner"
import styled from "styled-components";
import NovoHabito from "./NovoHabito";
import Habito from "./Habito";

export default function Habitos() {
    const location = useLocation()
    const { image, token } = location.state;

    const [data, setData] = useState();

    const [novoProjeto, setNovoProjeto] = useState(false);

    useEffect(
        () => {
            const promise = listarHabitos(token);
            promise.then((res) => {
                setData(res.data);
            })
        }, [token])

    console.log(data)
    return (
        <HabitosWrapper>
            <Header image={image} />
            <DivStyled>
                <SpanStyled>Meus hábitos</SpanStyled>
                <Botao width={'40px'}
                    height={'35px'}
                    fontSize={'27px'}
                    onClick={() => setNovoProjeto(true)}>+</Botao>
            </DivStyled>
            {novoProjeto &&
                <NovoHabito setNovoProjeto={setNovoProjeto}
                    token={token}
                    setData={setData}
                    data={data} />}
            <ul>
                {!data && <FallingLines
                    color="#126BA5" />}
                {data && data.map(value => <Habito key={value.id} habito={value} />)}
                {data && data?.length === 0 &&
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a acompanhar!
                    </span>}
            </ul>
            <Footer token={token} image={image} />
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
    flex-direction: column;
    justify-content:center;
    width: 340px;
    margin-bottom: 20px;
    span{
        color:#666666;
        font-size: 18px;
    }
}
`;

const SpanStyled = styled.span`
font-size: 23px;
color:#126BA5;
`

const DivStyled = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    font-size: 29px;
    color:#126BA5;
    height: 40px;
    width: 340px;
`;