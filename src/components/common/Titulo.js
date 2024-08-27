import styled from "styled-components";

export default function Titulo({ children, ...otherProps }) {
  console.log(otherProps)
  return (
    <Wrapper>{children}</Wrapper>
  )
}

const Wrapper = styled.h1`
  font-family: "Playball", cursive;
  font-size: 40px;
  color:#126BA5;
`