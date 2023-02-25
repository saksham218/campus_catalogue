import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar1 from "../Components/Navbar";
import ShopMainPage from "../Assets/ShopMainPage.png";
import VendorProfile from "../Components/VendorProfile";

import { Backend_URL } from "../../../admin_panel/src/utilities/config";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
    height: 102vh;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2vw;
`

const Home = () => {
  return (
    <Page>
        <Navbar1 />
        <MainContents>
            <VendorProfile/>
            <div style={{display: "flex", flexDirection: "column", gap: "2vw", justifyContent: "flex-end"}} >
            <img src={ShopMainPage} alt="ShopMainPage" />
            <Link to="/ShopDetails1">
            <button style={{padding: "0.5vw 1vw",border: "none", backgroundColor: "#9B9B9B", width: "24vw"}} > <h3> Add Your Shop to Campus Catalogue </h3> </button>
            </Link>
            </div>
        </MainContents>
    </Page>
  )
}

export default Home;