import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

import Navbar1 from "../Components/Navbar/Navbar";
import ShopMainPage from "../Assets/ShopMainPage.png";
import VendorProfile from "../Components/VendorProfile";

import { Backend_URL } from "../../../admin_panel/src/utilities/config";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2vw;
`

const Desktop22 = () => {
  return (
    <Page>
        <Navbar1 />
        <MainContents>
            <VendorProfile/>
            <img src={ShopMainPage} alt="ShopMainPage" />
        </MainContents>
    </Page>
  )
}

export default Desktop22;