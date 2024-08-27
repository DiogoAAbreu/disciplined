import styled from "styled-components"
import { Botao } from "../common"
export default function Formulario() {
    return (
        <FormularioWrapper>
            <input placeholder="email" />
            <input placeholder="senha" type="password" />
            <Botao>Entrar</Botao>
        </FormularioWrapper>
    )
}

const FormularioWrapper = styled.form`
display:  flex;
flex-direction: column;

input{
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-size: 20px;
    margin-top:20px;
    padding: 10px;
}

::placeholder{
    color: #D4D4D4;
}
`