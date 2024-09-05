import styled from "styled-components";
import { Botao } from "../common";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData"
import locale from "dayjs/locale/pt-br"

export default function NovoHabito() {
    dayjs.extend(localeData)
    dayjs.locale('pt-br')
    const diasSemana = dayjs.weekdays();
    const primeiraLetraDias = diasSemana.map(day => day.charAt(0).toUpperCase());

    function handleForm(e) {
        e.preventDefault();
    }

    return (
        <NovoHabitoWrapper>
            <form onSubmit={handleForm}>
                <input placeholder="nome do hábito" />
                <DiasDiv>
                    {primeiraLetraDias && primeiraLetraDias.map((value, index) =>
                        <DiaSemana key={index}><p>{value}</p></DiaSemana>
                    )}
                </DiasDiv>
                <BotoesDiv>
                    <span>Cancelar</span>
                    <Botao
                        width={'84px'}
                        height={'35px'}
                        fontSize={'16px'}>Salvar</Botao>
                </BotoesDiv>
            </form>
        </NovoHabitoWrapper>
    );
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
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    p{
        font-size: 20px;
        color: #DBDBDB;
    }

`;

const DiasDiv = styled.div`
display: flex;
margin-top: 10px;
`