import React from 'react';
import styled from "styled-components";

const H1 = styled.h1`
    font-size: 16px;
    font-weight: bold;
`

const Title = ({ text }) => {
    return (
        <H1>{text}</H1>
    );
}

export default Title;