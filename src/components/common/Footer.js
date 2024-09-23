import styled from "styled-components"
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { useNavigate, Link } from "react-router-dom"
import { useContext } from "react";
import { HojeContext } from "../../context/hoje";

export default function Footer() {
    const navigate = useNavigate();

    const { porcentagemConcluida } = useContext(HojeContext);

    return (
        <FooterWrapper>
            <Botoes>
                <button onClick={() => { navigate('/habitos') }}>Hábitos</button>
                <Link to={'/hoje'}>
                    <div>
                        <CircularProgressbarWithChildren
                            value={porcentagemConcluida}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        >
                            Hoje
                        </CircularProgressbarWithChildren>
                    </div>
                </Link>
                <button onClick={() => { navigate('/historico') }}>Hístorico</button>
            </Botoes>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
background-color: white;
height: 70px;
width: 100%;
position: fixed;
bottom: 0px;
left: 0px;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
font-family: "Lexend Deca", sans-serif;
`

const Botoes = styled.div`
display: flex;
width: 375px;
height: 100%;
align-items: center;
justify-content: space-around;
padding: 0px;
margin: 0px;

    div{
        width: 91px;
        height: 91px;
        color: white;
        font-size:18px;
        margin-bottom: 35px;
        &:hover{
            cursor: pointer;
            filter: brightness(1.01);
        }
    }


button{
    font-size: 18px;
    color: #52B6FF;
    &:hover{
        filter: brightness(1.1);
    }
}
`

