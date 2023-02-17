import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

import Navbar1 from "../Components/Navbar/Navbar";
import Desktop17img from "../assets/Desktop17.png"; 

import { Backend_URL } from "../../../admin_panel/src/utilities/config";
import PinnedCards from '../Components/pinnedcards/pinnedcards';
import TrendingShopCard from '../Components/TrendingShopCard';
import { IoArrowRedoOutline } from "react-icons/io";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
    justify-content: center;
`

const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2vw;
`

const Pinned = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;

    background-color: white;
    padding: 1vw;
`

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1vw;
    background-color: white;
`

const Container3 = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    color: black;
`

const Desktop17 = () => {
  return (
    <Page>
        <Navbar1 />
        <Container1>
            <Pinned>
                <Title>Your Pinned Shops</Title>
                <PinnedCards/>
                <PinnedCards/>
                <div style={{display: "flex", justifyContent: "space-between", padding: "0.3vw 1vw", backgroundColor: "#D9D9D9"}} >
                    View All 
                    <div>
                        <IoArrowRedoOutline/>
                    </div>
                </div>
            </Pinned>
            <img src={Desktop17img} alt="Location" />
        </Container1>
        <Container2>
            <Title>Trending Shops</Title>
            <Grid>
                <TrendingShopCard shopname="Shop 1" shoptype="Grocery"/>
                <TrendingShopCard shopname="Shop 2" shoptype="Grocery"/>
                <TrendingShopCard shopname="Shop 3" shoptype="Grocery"/>
                <TrendingShopCard shopname="Shop 4" shoptype="Grocery"/>
            </Grid>
        </Container2>
        <Container3>

        </Container3>
    </Page>
  )
}

export default Desktop17;