import React from 'react';
import styled from "styled-components";

import { IconButton } from "../IconButton";

const Wrapper = styled.div`
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 9px 18px;
`

const Header = ({ logo, actionButton, onClick }) => {
    return (
        <Wrapper>
            {logo}
            <IconButton
                onClick={onClick}
                icon={actionButton}
            />
        </Wrapper>
    );
}

export default Header;