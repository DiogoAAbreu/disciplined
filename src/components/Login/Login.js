import styled from "styled-components"
import { Titulo } from "../common"
import Formulario from "./Formulario"

export default function Login() {
    return (
        <LoginWrapper>
            <Titulo grande>Disciplined</Titulo>
            <Formulario />
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
