import styled from "styled-components";

export default function Titulo({ children, tamanho }) {
  return (
    <Wrapper $tamanho={tamanho}>{children}</Wrapper>
  )
}

const Wrapper = styled.h1`
  font-family: "Playball", cursive;
  font-size: ${props => props.$tamanho === 'pequeno' ? '39px' : '70px'};
  color:${props => props.$tamanho === 'pequeno' ? 'white' : '#126BA5'};

  &:hover{
    cursor: default;
  }
`