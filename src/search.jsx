import React, { useEffect, useState } from "react";
import styled from "styled-components";
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const handleClick = () => {
    props.setFilterTerm(input);
  };
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search for a product"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => handleClick()}>Search</button>
      <button onClick={() => props.setFilterTerm("")}>Cancel</button>
    </SearchContainer>
  );
}
