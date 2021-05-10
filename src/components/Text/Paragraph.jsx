import React from 'react';
import styled from "styled-components";

const P = styled.p`
    font-size: 16px;
`

const Paragraph = ({ text }) => {
    return (
        <P>{text}</P>
    );
}

export default Paragraph;