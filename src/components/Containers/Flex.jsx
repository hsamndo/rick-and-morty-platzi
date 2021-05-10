import React from 'react';
import styled from "styled-components";

const StyledFlex = styled.div`
    align-items: center;
    display: flex;
    justify-content:${ ({justifyContent}) => justifyContent ? justifyContent : "center"}
`

const Flex = ({ children, justifyContent }) => {
    return (
        <StyledFlex justifyContent={justifyContent}>{children}</StyledFlex>
    );
}

export default Flex;