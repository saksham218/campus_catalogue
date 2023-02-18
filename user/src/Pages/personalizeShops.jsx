import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

import Navbar1 from "../Components/Navbar/Navbar";
import Desktop17img from "../assets/Desktop17.png"; 

import { Backend_URL } from "../../../admin_panel/src/utilities/config";
import PinnedCards from '../Components/pinnedcards/pinnedcards';
import TrendingShopCard from '../Components/TrendingShopCard';
import { AiOutlineArrowRight } from "react-icons/ai";
import RecentOrdersCard from '../Components/RecentOrdersCard';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
    /* justify-content: center; */
    /* align-items: center; */
`

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
    background-color: #c8c8c8;

  gap: 2vw;
`

const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    align-items: center;
    background-color: white;
    padding: 1vw;
    /* width: fit-content; */
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
    gap: 1vw;
    background-color: white;
    padding: 1.5vw;
`

const Title = styled.div`
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-size: 34px;
    font-weight: 500;
    color: black;
`

const personalizeShops = () => {
  return (
    <Page>
        <Navbar1 />
        <MainContents>
        <Container1>
            <Pinned>
                <Title>Your Pinned Shops</Title>
                <PinnedCards/>
                <PinnedCards/>
                <div style={{display: "flex", justifyContent: "space-between",alignItems: "center", padding: "1vw 2vw", backgroundColor: "#D9D9D9"}} >
                    <h3>View All</h3> 
                    <div>
                        <AiOutlineArrowRight/>
                    </div>
                </div>
            </Pinned>
            <div>
            <img src={Desktop17img} alt="Location" style={{width: "45vw", height: "45vw"}}/>
            </div>
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
            <Title>Recent Orders</Title>
                <RecentOrdersCard/>
                <RecentOrdersCard/>     
                <RecentOrdersCard/>     
                <RecentOrdersCard/>     
                <RecentOrdersCard/>     
                <RecentOrdersCard/>     
        </Container3>
        </MainContents>
    </Page>
  )
}

export default personalizeShops;