import React from 'react';
import styled from "styled-components";

import { Flex } from "../Containers";
import { Title, Paragraph } from "../Text";
import { Badge } from "../Badges";
import { IconButton } from "../IconButton";
import { Heart, HeartOutlined } from "../Icons";

const Wrapper = styled.div`
    padding: 8px;
`

const FlexCard = styled(Flex)``

const Status = styled.div`
    align-items: center;
    display: flex;
`
const HeaderCard = ({ name, status, isFavourite, onClick }) => {
    return (
        <Wrapper>
            <Title text={name} />
            <FlexCard justifyContent="space-between">
                <Status>
                    <Badge isActive={(status === "Alive") ? true : false} marginRight={16}/>
                    <Paragraph text={status} />
                </Status>
                <IconButton
                    onClick={onClick}
                    icon={
                        !isFavourite
                            ?<HeartOutlined height={15} width={15} />
                            : <Heart height={15} width={15}/>
                    }
                />
            </FlexCard>
        </Wrapper>
    );

}

export default HeaderCard;