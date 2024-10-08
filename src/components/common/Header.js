import styled from "styled-components"
import Titulo from "./Titulo"
import { AuthContext } from "../../context/auth"
import { useContext } from "react"

export default function Header() {

    const { usuarioData } = useContext(AuthContext);

    return (
        <HeaderWrapper>
            <Titulo tamanho={'pequeno'}>Disciplined</Titulo>
            <img src={usuarioData.image} alt='Foto Perfil' />
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
padding: 30px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
z-index: 1;
img{
    width: 52px;
    height: 52px;
    border-radius: 50%;
    object-fit: cover;
}
`