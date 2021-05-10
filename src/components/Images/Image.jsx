import React from 'react';
import styled from "styled-components";

const Img = styled.img`
    height: ${({ height }) => height ? height : 180}px;
    width: ${({ width }) => width ? width : 250}px;

`

const Image = (props) => {
    return (
        <Img {...props} />
    );
}

export default Image;