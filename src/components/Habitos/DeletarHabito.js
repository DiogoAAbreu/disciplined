import styled from "styled-components"
import { deletarHabito } from "../../services/track"

export default function DeletarHabito({ setDeletar, idHabito, token, data, setData }) {

    function deletar(idHabito, token) {
        const promise = deletarHabito(idHabito, token)
        promise.then(() => {
            setData(data.filter(value => value.id !== idHabito))
        }).catch(err => alert(err.response.data.message))
    }

    return (
        <DeletarWrapper>
            <span>Deseja mesmo excluir este habito?</span>
            <div>
                <p onClick={() => { setDeletar(false) }}>Cancelar</p>
                <button onClick={() => { deletar(idHabito, token) }}>Excluir</button>
            </div>
        </DeletarWrapper>)
}

const DeletarWrapper = styled.div`
div{
    display:flex;
    height: 50px;
    align-items: end;
    justify-content: end;
    padding: 10px;
    }
button{
    color: white;
    background-color: #ed4949;
    height: 30px;
    border-radius: 5px;
    width: 60px;
    &:hover{
        filter: brightness(1.2);
    }
}
p{
    height: 22px;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
    }
}
`