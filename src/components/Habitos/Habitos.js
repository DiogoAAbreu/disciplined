import { Header, Botao, Footer } from "../common";
import { useState, useContext } from "react";
import { FallingLines } from "react-loader-spinner"
import styled from "styled-components";
import NovoHabito from "./NovoHabito";
import Habito from "./Habito";
import { AuthContext } from "../../context/auth";
import { HabitosContext } from "../../context/habitos";

export default function Habitos() {

    const { usuarioData } = useContext(AuthContext);
    const { token } = usuarioData;
    const { data, setData } = useContext(HabitosContext);

    const [novoProjeto, setNovoProjeto] = useState(false);

    return (
        <HabitosWrapper>
            <Header />
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
                {data && data.map(value => <Habito key={value.id}
                    habito={value}
                    idHabito={value.id}
                    token={token}
                    data={data}
                    setData={setData} />)}
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
    align-items: center;
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