import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(5, 1fr);
    padding: 18px;
`

const Grid = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default Grid;