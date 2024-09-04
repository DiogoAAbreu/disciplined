import styled from "styled-components"

export default function Botao({ children, onClick, disabled, tamanho }) {

    return (
        <BotaoWrapper
            onClick={onClick}
            disabled={disabled}
            $tamanho={tamanho}>{children}</BotaoWrapper>
    )
}

const BotaoWrapper = styled.button`
background-color: #52B6FF;
font-family: "Lexend Deca", sans-serif;
width: ${props => props.$tamanho === "pequeno" ? '40px' : '303px'};
height: ${props => props.$tamanho === "pequeno" ? '35px' : '45px'};;
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