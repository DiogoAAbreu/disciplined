import styled from "styled-components"
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData"
import locale from "dayjs/locale/pt-br"
import { useEffect, useState } from "react";

export default function Habito({ habito }) {

    dayjs.extend(localeData)
    dayjs.locale('pt-br')
    const diasSemana = dayjs.weekdays();
    const primeiraLetraDias = diasSemana.map(day => day.charAt(0).toUpperCase());

    return (
        <HabitoWrapper>
            <span>{habito.name}</span>
            <DiasDiv>
                {primeiraLetraDias && primeiraLetraDias.map((value, index) =>
                    <Dia key={index}
                        numDia={index}
                        diasHabito={habito.days}>
                        <p>{value}</p>
                    </Dia>)}
            </DiasDiv>
            <StyledIcon className="ionicon">
                <ion-icon name="trash-outline"></ion-icon>
            </StyledIcon>
        </HabitoWrapper>
    )
}


function Dia({ children, numDia, diasHabito }) {

    const [selecionado, setSelecionado] = useState(false)

    useEffect(() => {
        if (diasHabito.includes(numDia)) {
            setSelecionado(true)
        }
    }, [])
    return (
        <DiaSemana $selecionado={selecionado}>{children}</DiaSemana>
    )
}

const HabitoWrapper = styled.li`
width: 340px;
height: 91px;
border-radius: 5px;
background-color: white;
margin-top:10px;
display: flex;
flex-direction: column;
padding: 10px 0px 0px 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
position: relative;
margin-bottom:20px;
span{
    font-size: 20px;
    color:#666666;
}
`
const DiaSemana = styled.div`

    width: 30px;
    height: 30px;
    background-color: ${props => props.$selecionado ? '#CFCFCF' : 'white'};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    p{
    font-size: 20px;
    color: ${props => props.$selecionado ? 'white' : '#DBDBDB'};
}
    &:hover{
    cursor: pointer;
}

`;

const DiasDiv = styled.div`
display: flex;
margin-top: 10px;
`
const StyledIcon = styled.i`
font-size: 20px;
color: #666666;
position: absolute;
top:10px;
right: 10px;
&:hover{
    cursor: pointer;
    filter: brightness(1.2);
}
`