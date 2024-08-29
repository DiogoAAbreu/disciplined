import styled from "styled-components"

export default function Botao({ children, onClick, disabled }) {

    return (
        <BotaoWrapper onClick={onClick} disabled={disabled}>{children}</BotaoWrapper>
    )
}

const BotaoWrapper = styled.button`
background-color: #52B6FF;
font-family: "Lexend Deca", sans-serif;
width: 303px;
height: 45px;
color: white;
font-size:21px;
border-radius: 5px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    filter: brightness(1.1);
}
`