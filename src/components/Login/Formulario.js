import styled from "styled-components"
import { Botao } from "../common"
import { useState, useContext } from "react"
import { FallingLines } from "react-loader-spinner"
import { fazerLogin } from "../../services/track"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth"
export default function Formulario() {

    const { setUsuarioData } = useContext(AuthContext)

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();
    }

    function enviarForm() {
        setDisabled(true);
        const promise = fazerLogin(usuario)
        promise.then(res => {
            setUsuarioData({
                token: res.data.token,
                image: res.data.image
            })
            navigate('/habitos')
        }).catch(err => {
            setDisabled(false);
            alert(err.response.data.message);
        })
    }

    return (
        <FormularioWrapper onSubmit={handleForm}>
            <input
                disabled={disabled}
                required
                name="email"
                value={usuario.email}
                placeholder="email"
                onChange={e => setUsuario({
                    ...usuario,
                    [e.target.name]: e.target.value
                })} />
            <input
                disabled={disabled}
                required
                name="password"
                value={usuario.password}
                placeholder="senha"
                type="password"
                onChange={e => setUsuario({
                    ...usuario,
                    [e.target.name]: e.target.value
                })} />
            <Botao
                disabled={disabled}
                onClick={enviarForm}>{disabled ?
                    <FallingLines
                        color="white"
                        width="50px"
                    /> : 'Entrar'}</Botao>
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