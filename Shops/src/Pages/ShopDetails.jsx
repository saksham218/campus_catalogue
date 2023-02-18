import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

import Navbar1 from "../Components/Navbar";
import ShopDetails1 from "../Components/ShopDetails1";
import ShopDetails2 from "../Components/ShopDetails2";
 
import { useSearchParams } from "react-router-dom";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
    height: 140vh;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ShopDetails = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [token, setToken] = useState("");

  // const tokenn = searchParams.get("token");
  // if (tokenn) {
  //   setToken(tokenn);
  // }
  return (
    <Page>
        <Navbar1 />
        <MainContents>
            <ShopDetails1 />
            <ShopDetails2 />
        </MainContents>
    </Page>
  )
}

export default ShopDetails;