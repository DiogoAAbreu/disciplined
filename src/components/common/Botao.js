import styled from "styled-components"

export default function Botao({
    children,
    onClick,
    disabled,
    width,
    height,
    fontSize }) {
    return (
        <BotaoWrapper
            onClick={onClick}
            disabled={disabled}
            $width={width}
            $height={height}
            $fontSize={fontSize}
        >{children}</BotaoWrapper>
    )
}

const BotaoWrapper = styled.button`
background-color: #52B6FF;
font-family: "Lexend Deca", sans-serif;
width: ${props => props.$width ? props.$width : '303px'};
height: ${props => props.$height ? props.$height : '45px'};;
color: white;
font-size:${props => props.$fontSize ? props.$fontSize : '21px'};
border-radius: 5px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    filter: brightness(1.1);
}
`