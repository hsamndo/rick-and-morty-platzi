import React from 'react';
import styled from "styled-components";

import HeaderCard from "./HeaderCard";
import { Image } from "../Images";

const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
`;

const CardImage = styled(Image)`
    width: 100%;
    border-radius: 0 0 8px 8px;
`

const Card = ({ character, isFavourite, onClick }) => {
    return (
        <Wrapper>
            <HeaderCard
                name={character.name}
                status={character.status}
                isFavourite={isFavourite}
                onClick={onClick}
            />
            <CardImage src={character.image} alt={character.name} />
        </Wrapper>
    );
}

export default Card;