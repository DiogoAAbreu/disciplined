import styled from "styled-components";
import { Botao } from "../common";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData"
import locale from "dayjs/locale/pt-br"
import { useState } from "react";
import { postarHabitos } from "../../services/track";
import { FallingLines } from "react-loader-spinner";

export default function NovoHabito({
    setNovoProjeto,
    token,
    setData,
    data }) {
    dayjs.extend(localeData)
    dayjs.locale('pt-br')
    const diasSemana = dayjs.weekdays();
    const primeiraLetraDias = diasSemana.map(day => day.charAt(0).toUpperCase());

    const [habito, setHabito] = useState({
        name: '',
        days: []
    })

    const [carregando, setCarregando] = useState(false)

    function handleForm(e) {
        e.preventDefault();
    }

    function postar(habito, token) {
        setCarregando(true)
        const promise = postarHabitos(habito, token);
        promise.then(res => {
            console.log(res.data)
            setNovoProjeto(false)
            setCarregando(false)
            setData([...data, res.data])
        }).catch(err => {
            setCarregando(false)
            alert(err.response.data.message)
            console.log(habito)
        }
        )
    }

    return (
        <NovoHabitoWrapper >
            <form onSubmit={handleForm}>
                <input
                    disabled={carregando}
                    required
                    placeholder="nome do hábito"
                    value={habito.name}
                    name="name"
                    onChange={e =>
                        setHabito({
                            ...habito,
                            [e.target.name]: e.target.value
                        })}
                />
                <DiasDiv>
                    {primeiraLetraDias && primeiraLetraDias.map((value, index) =>
                        <Dia key={index}
                            habito={habito}
                            dayNum={index}
                            setHabito={setHabito}
                            carregando={carregando}><p>{value}</p></Dia>)}
                </DiasDiv>
                <BotoesDiv>
                    <span onClick={() => setNovoProjeto(false)}>Cancelar</span>
                    <Botao
                        width={'84px'}
                        height={'35px'}
                        fontSize={'16px'}
                        onClick={() => postar(habito, token)}>{carregando ? <FallingLines
                            color="white"
                            width="35px" /> : 'Salvar'}</Botao>
                </BotoesDiv>
            </form>
        </NovoHabitoWrapper>
    );
}

function Dia({ children, habito, setHabito, dayNum, carregando }) {

    const [selecionado, setSelecionado] = useState(false)

    function selecionar() {
        if (carregando) {
            return;
        }
        if (!selecionado) {
            setSelecionado(true);
            setHabito({
                ...habito,
                days: [...habito.days, dayNum]
            })
        }
        else {
            setSelecionado(false);
            setHabito({
                ...habito,
                days: habito.days.filter(value => value !== dayNum)
            });
        }
    }

    return (
        <DiaSemana $selecionado={selecionado} onClick={selecionar}>{children}</DiaSemana>
    )
}

const NovoHabitoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: start;
background-color: #FFFFFF;
width: 340px;
height: 180px;
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin-top: 20px;
form{
    height: 100%;
    display: flex;
    flex-direction: column;
}        

input{
    margin-top: 15px;
    width: 303px;
    height: 45px;
    font-size: 20px;
    padding: 8px;
    border: solid 1px #D4D4D4;
    border-radius:5px;
    &::placeholder{
        color:#DBDBDB;
    }
}
`;

const BotoesDiv = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    width: 303px;
    span{
        height: 25px;
        color: #52B6FF;
        font-size: 16px;
        margin-right: 20px;
        &:hover{
            cursor: pointer;
            filter: brightness(1.1);
        }
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