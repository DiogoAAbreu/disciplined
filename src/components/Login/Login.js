import styled from "styled-components"
import { Titulo, LinkSublinhado } from "../common"
import Formulario from "./Formulario"

export default function Login() {
    return (
        <LoginWrapper>
            <Titulo >Disciplined</Titulo>
            <Formulario />
            <LinkSublinhado to={"/cadastro"}>
                Não tem uma conta: Cadastre-se!
            </LinkSublinhado>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
display:  flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100vh;
`