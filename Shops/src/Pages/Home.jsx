import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar1 from "../Components/Navbar";
import ShopMainPage from "../Assets/ShopMainPage.png";
import VendorProfile from "../Components/VendorProfile";
import { useSearchParams } from "react-router-dom";

import { Backend_URL,getShop } from "../apis/api";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
    /* height: 102vh; */
  padding-bottom: 5vw;

`

const MainContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2vw;
`

const Home = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [shop, setShop] = useState({
    basic_info: {
      name: "",
      phone: "",
      email: "",
      image:""
    },
  });

  const token = searchParams.get("token");
  if (token) {
    localStorage.setItem("shop_token", token);
    window.location.href = "/";
  }
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("shop_token", token);
      window.location.href = "/";
    }

  }, [])
  
  return (
    <Page>
        <Navbar1 shop={props.shop}/>
        <MainContents>
            <VendorProfile shop={props.shop}/>
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