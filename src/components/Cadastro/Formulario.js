import styled from "styled-components"
import { Botao } from "../common"
import { useState } from "react"
import { fazerCadastro } from "../../services/track";
import { useNavigate } from "react-router-dom";
import { FallingLines } from "react-loader-spinner"

export default function Formulario() {
    const [novoUsuario, setNovoUsuario] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })

    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    function handleForm(e) {
        e.preventDefault();
    }

    function enviarForm() {
        setDisabled(true)
        const promise = fazerCadastro(novoUsuario)
        promise.then(
            () => navigate('/')
        ).catch(e => {
            alert(e.response.data.message)
            setDisabled(false);
        })
    }

    return (
        <FormularioWrapper onSubmit={handleForm}>
            <input
                disabled={disabled}
                required
                placeholder="email"
                name="email"
                value={novoUsuario.email}
                onChange={e => setNovoUsuario({
                    ...novoUsuario,
                    [e.target.name]: e.target.value
                })} />

            <input
                disabled={disabled}
                required
                placeholder="senha"
                type="password"
                name="password"
                value={novoUsuario.password}
                onChange={e => setNovoUsuario({
                    ...novoUsuario,
                    [e.target.name]: e.target.value
                })} />

            <input
                disabled={disabled}
                required
                placeholder="nome"
                name="name"
                value={novoUsuario.name}
                onChange={e => setNovoUsuario({
                    ...novoUsuario,
                    [e.target.name]: e.target.value
                })} />

            <input
                disabled={disabled}
                required
                placeholder="foto"
                name="image"
                value={novoUsuario.image}
                onChange={e => {
                    setNovoUsuario({
                        ...novoUsuario,
                        [e.target.name]: e.target.value
                    })
                    console.log(novoUsuario)
                }} />

            <Botao
                disabled={disabled}
                onClick={enviarForm}>
                {disabled ? <FallingLines
                    color="white"
                    width="50px"
                /> :
                    'Cadastrar'}
            </Botao>
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