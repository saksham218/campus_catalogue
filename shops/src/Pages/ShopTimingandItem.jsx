import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

import Navbar1 from "../Components/Navbar";
import ShopDetails3 from '../Components/ShopDetails3';

import { Backend_URL } from "../../../admin_panel/src/utilities/config";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ShopTimingandItem = () => {
  return (
    <Page>
        <Navbar1 />
        <MainContents>
            <ShopDetails3/>
        </MainContents>
    </Page>
  )
}

export default ShopTimingandItem;