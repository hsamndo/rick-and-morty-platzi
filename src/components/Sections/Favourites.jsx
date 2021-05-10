import React from "react";
import styled from "styled-components";

import { FavouriteBadge } from "../Badges";

const Wrapper = styled.div`
  background: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  padding: 16px;
`;

const Favourites = ({ favourites }) => {
  return (
    <Wrapper>
      {favourites && favourites.length > 0 ? (
        favourites.map((favourite) => {
            return <FavouriteBadge key={favourite.id} src={favourite.image} alt={favourite.name}/>;
        })
      ) : (
        <p>Aún no tienes personajes favoritos.</p>
      )}
    </Wrapper>
  );
};

export default Favourites;
