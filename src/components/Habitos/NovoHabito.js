import styled from "styled-components"

export default function NovoHabito() {
    return (
        <NovoHabitoWrapper>
            <form>
                <input placeholder="nome do hábito" />
            </form>
        </NovoHabitoWrapper>
    )
}

const NovoHabitoWrapper = styled.div`
input{
    width: 303px;
    height: 45px;
    font-size: 20px;
    padding: 8px;
    border: solid 1px #D4D4D4;
    border-radius:5px;

    &::placeholder{
        color:#DBDBDB;
    }
}

&&{
    padding: 25px;
    display: flex;
    align-items: start;
    justify-content: center;
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`