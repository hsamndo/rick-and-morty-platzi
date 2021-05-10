import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    background: inherit;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: grid;
    height: 40px;
    outline: none;
    padding: 4px;
    place-items: center;
    width: 40px;
`;

const IconButton = (props) => {
    const { icon } = props;
    return (
        <Button {...props}>
            {icon}
        </Button>
    );
}

export default IconButton;