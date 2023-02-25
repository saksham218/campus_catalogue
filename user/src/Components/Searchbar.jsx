import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Searchbar = styled.input`
  /* width: 100%; */
  height: 3.5vw;

  text-align: left;
  padding-left: 8vw;

  font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: black;
`

export const Searchbar1 = () => {
  return <Searchbar placeholder=" Search for shops nearby" />;
};

export const Searchbar2 = () => {
  return <Searchbar placeholder="Search in this shop" />;
};

export const Searchbar3 = () => {
  return <Searchbar placeholder="Search for a product" />;
};

// export const Searchbar4 = (props) => {
//   return <Searchbar placeholder="Search for {props} "/>;
// };
