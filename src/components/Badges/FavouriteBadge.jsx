import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    background: inherit;
    border: 1px solid green;
    border-radius: 50%;
    display: grid;
    margin: 0 8px;
    padding: 7px;
    place-items: center;
`

const Image = styled.img`
    border-radius: 50%;
    height: 48px;
    width: 48px;
`

const FavouriteBadge = ({ src, alt }) => {
    return (
        <Wrapper>
            <Image  alt={alt} src={src} />
        </Wrapper>
    );
}

export default FavouriteBadge;