import styled from "styled-components"
import Titulo from "./Titulo"

export default function Header({ image }) {
    return (
        <HeaderWrapper>
            <Titulo tamanho={'pequeno'}>Disciplined</Titulo>
            <img src={image} alt='Foto Perfil' />
        </HeaderWrapper>)
}

const HeaderWrapper = styled.header`
width: 100%;
height: 70px;
background-color: #126BA5;
position: fixed;
top: 0px;
left: 0px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;

img{
    width: 52px;
    border-radius: 50%;
}
`