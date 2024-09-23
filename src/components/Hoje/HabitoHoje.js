import styled from "styled-components"
import { desmarcarConcluido, marcarConcluido } from "../../services/track"
import { useContext, useState } from "react"
import { HojeContext } from "../../context/hoje"
import { AuthContext } from "../../context/auth"
import { FallingLines } from "react-loader-spinner"

export default function HabitoHoje({ habito }) {
    const { usuarioData } = useContext(AuthContext);
    const { setHabitosConcluidos, habitosConcluidos } = useContext(HojeContext);
    const [carregando, setCarregando] = useState(false)

    function concluirDesconcluir() {
        if (!habito.done) {
            setCarregando(true)
            const promise = marcarConcluido(habito.id, usuarioData.token)
            promise.then((res) => {
                setHabitosConcluidos([
                    ...habitosConcluidos, habito
                ])
                setCarregando(false)
            }

            )
        }
        if (habito.done) {
            setCarregando(true)
            const promise = desmarcarConcluido(habito.id, usuarioData.token)
            promise.then(res => {
                setHabitosConcluidos(habitosConcluidos.filter(value => value.id !== habito.id))
                setCarregando(false)
            }
            )
        }
    }

    return (
        <HabitoHojeWrapper>
            <DescricaoDiv>
                <SpanStyled>{habito.name}</SpanStyled>
                <PStyled $sequenciaAtual={habito.currentSequence}>Sequencial atual: {habito.currentSequence} dias</PStyled>
                <PStyled $maiorSequencia={habito.highestSequence}>Sequencial recorde: {habito.highestSequence} dias</PStyled>
            </DescricaoDiv>
            <BotaoCheck $concluido={habito.done}
                onClick={concluirDesconcluir}>
                {carregando ? <FallingLines
                    color="white" /> : <ion-icon name="checkmark-sharp"></ion-icon>}

            </BotaoCheck>
        </HabitoHojeWrapper>
    )
}

const HabitoHojeWrapper = styled.li`
display: flex;
justify-content: space-between;
list-style-type: none;
width: 340px;
height: 94px;
background-color: white;
border-radius: 5px;
padding: 10px;
margin-bottom: 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const DescricaoDiv = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

const BotaoCheck = styled.button`
width: 70px;
height: 70px;
background-color: ${props => props.$concluido ? '#8FC549' : '#E7E7E7'};
border-radius: 5px;
border: 1px solid #E7E7E7;
font-size: 60px;
color: white;
display: flex;
padding: 10px;
box-sizing: border-box;
align-items: center;
justify-content: center;
`

const SpanStyled = styled.span`
font-size: 20px;
color: #666666;
margin-bottom: 20px;
`

const PStyled = styled.p`
font-size: 13px;
color: #666666;
`