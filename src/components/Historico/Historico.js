import styled from "styled-components"
import { Footer, Header } from "../common"

export default function Historico() {

    return (
        <HistoricoWrapper>
            <Header />
            <Conteudo>
                <SpanStyled>Histórico</SpanStyled>
                <PStyled>Em breve você poderá ver o histórico dos seus hábitos aqui!</PStyled>
            </Conteudo>
            <Footer />
        </HistoricoWrapper>)
}

const HistoricoWrapper = styled.main`
font-family: "Lexend Deca", sans-serif;
background-color:#f2f2f2;
padding: 70px 0px;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Conteudo = styled.div`
width:360px;
padding: 10px;
margin-top: 10px;
`

const SpanStyled = styled.span`
margin: 20px 0px;
font-size: 23px;
color:#126BA5;
margin-bottom: 20px;
`
const PStyled = styled.p`
color: #666666;
font-size: 18px;
margin-top: 20px;
`