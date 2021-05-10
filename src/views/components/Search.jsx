import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div``;
const Input = styled.input``;

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <Wrapper className="search">
            <Input
                type="text"
                ref={searchInput}
                onChange={handleSearch}
                value={search}
            />
        </Wrapper>
    );
}

export default Search;