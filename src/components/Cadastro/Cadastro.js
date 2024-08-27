import styled from "styled-components"
import { LinkSublinhado, Titulo } from "../common"
import Formulario from "./Formulario"

export default function Cadastro() {
    return (
        <CadastroWrapper>
            <Titulo>Disciplined</Titulo>
            <Formulario />
            <LinkSublinhado to={"/"}>Já tem uma conta? Faça login!</LinkSublinhado>
        </CadastroWrapper>
    )
}

const CadastroWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
flex-direction: column;
`