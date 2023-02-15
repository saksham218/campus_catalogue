import React from 'react';
import styled from 'styled-components';

import Navbar1 from '../Components/Navbar/Navbar';
import LocationStatusCard from '../Components/Locationcard/LocationStatusCard';
import Cards from '../Components/cards/Cards';
import Filterbox from '../Components/Filterbox/Filterbox';

import MainPage from "../Assets/MainPage.png";

const Page = styled.div`
    display: flex;
    flex-direction: column;

    gap: 3vw;

    background-color: #C8C8C8;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;`

const Image = styled.div`
    width: 670px;
`

const Wireframe1 = () => {
  return (
    <Page>
        <Navbar1 />
        <MainContents>
            <LocationStatusCard number="4" adress="Main gate, Disang Hostel, IIT Guwahati" />
            <Container>
                <Filterbox status="Open Now" type="Stationery" service="Service" />
                <Cards shopname="Core 1 Stationery" shoptype="Stationery Store" adress="Core-1 building near lecture hall, IITG" status="Open Now" distance="800m" checkpoint="Central Library" />
                <Cards shopname="Core 1 Stationery" shoptype="Stationery Store" adress="Core-1 building near lecture hall, IITG" status="Open Now" distance="800m" checkpoint="Central Library" />
                <Cards shopname="Core 1 Stationery" shoptype="Stationery Store" adress="Core-1 building near lecture hall, IITG" status="Open Now" distance="800m" checkpoint="Central Library" />
                <Cards shopname="Core 1 Stationery" shoptype="Stationery Store" adress="Core-1 building near lecture hall, IITG" status="Open Now" distance="800m" checkpoint="Central Library" />
                <Cards shopname="Core 1 Stationery" shoptype="Stationery Store" adress="Core-1 building near lecture hall, IITG" status="Open Now" distance="800m" checkpoint="Central Library" />
                <Cards shopname="Core 1 Stationery" shoptype="Stationery Store" adress="Core-1 building near lecture hall, IITG" status="Open Now" distance="800m" checkpoint="Central Library" />
            </Container>
            <Image>
            <img src={MainPage} alt="" />
            </Image>
        </MainContents>
    </Page>
  )
}

export default Wireframe1;