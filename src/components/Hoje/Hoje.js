import styled from "styled-components"
import { Footer, Header } from "../common"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import 'dayjs/locale/pt-br'
import { useContext } from "react"
import HabitoHoje from "./HabitoHoje"
import { HojeContext } from "../../context/hoje"

export default function Hoje() {
    dayjs.extend(localizedFormat)
    dayjs.locale('pt-br')
    const hoje = dayjs();

    const dataHoje = hoje.format('dddd, DD/MM')
    const dataFormatada = dataHoje.charAt(0).toUpperCase() + dataHoje.slice(1).toLowerCase();

    const { habitos, porcentagemConcluida } = useContext(HojeContext)

    return (
        <HojeWrapper>
            <Header />
            <Conteudo>
                <SpanStyled>{dataFormatada}</SpanStyled>
                <PStyled $porcentagemConcluida={porcentagemConcluida}>
                    {porcentagemConcluida === 0 ? 'Nenhum hábito concluído ainda' :
                        `${porcentagemConcluida}% dos hábitos concluídos`}
                </PStyled>
                <ul>
                    {habitos && habitos.map(value => <HabitoHoje
                        key={value.id}
                        habito={value} />)}
                </ul>
            </Conteudo>
            <Footer />
        </HojeWrapper>
    )
}

const HojeWrapper = styled.main`
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
ul{
    margin-bottom: 20px;
}
`

const SpanStyled = styled.span`
margin: 20px 0px;
font-size: 23px;
color:#126BA5;
margin-bottom: 20px;
`
const PStyled = styled.p`
color: ${props => props.$porcentagemConcluida === 0 ? '#666666' : '#8FC549'};
font-size: 18px;
margin: 20px 0px;
`
