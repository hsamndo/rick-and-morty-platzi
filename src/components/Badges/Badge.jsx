import styled from "styled-components";

const Badge = styled.div`
    background-color: ${({ isActive }) => isActive ? "green" : "red"};
    height: 15px;
    margin-right: ${({ marginRight }) => marginRight ? marginRight : 0}px;
    width: 15px;
    border-radius: 50%;
`

export default Badge;