import styled from "styled-components"

export default function Botao({ children }) {

    return (
        <BotaoWrapper>{children}</BotaoWrapper>
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

&:hover{
    filter: brightness(1.1);
}
`