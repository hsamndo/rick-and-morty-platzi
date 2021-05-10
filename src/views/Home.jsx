import React, { useReducer, useMemo, useState, useRef, useCallback } from "react";

import { Card } from "../components/Card";
import { Grid } from "../components/Containers";
import { FavouriteSection } from "../components/Sections";
import { Search } from "./components";

import { useRickMortyApi } from "../hooks";
import { initialStateFavourites, favouritesReducer } from "./reducers";

const Home = () => {
  const [state, dispatch] = useReducer(favouritesReducer, initialStateFavourites);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useRickMortyApi("https://rickandmortyapi.com/api/character");

  const favouriteIncludes = (favourite) => {
    return (state.favourites && (state.favourites.filter(e => e.id === favourite.id)).length > 0)
      ? true
      : false;
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  const filteredUsers = useMemo(() => 
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
 );

  return (
    <>
      <FavouriteSection favourites={state.favourites} />

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      
      <Grid columns={5}>
        {filteredUsers.map((character) => {
          return <Card key={character.id}
            character={character}
            isFavourite={favouriteIncludes(character)}
            onClick={
                favouriteIncludes(character) 
                ?() => dispatch({ type: "REMOVE_FAVOURITES", payload: character })
                :() => dispatch({ type: "ADD_FAVOURITES", payload: character })
            }
          />;
        })}
      </Grid>
    </>
  );
};

export default Home;
