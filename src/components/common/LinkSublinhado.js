import { Link } from "react-router-dom"
import styled from "styled-components"

export default function LinkSublinhado({ children, to }) {
    return (
        <StyledLink to={to}>{children}</StyledLink>
    )
}

const StyledLink = styled(Link)`
font-family: "Lexend Deca", sans-serif;
color: #52B6FF;
font-size: 14px;
margin-top: 20px;
`