import { useEffect, useState } from "react";

const useRickMortyApi = (url) => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then (response =>  setCharacters(response.results))
    }, [url])
    return characters;
};

export default useRickMortyApi;