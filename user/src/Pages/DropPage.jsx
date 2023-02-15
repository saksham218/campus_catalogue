import React from 'react';
import styled from 'styled-components';

import ShopDescription from "../Components/ShopDescription";
import Navbar1 from '../Components/Navbar/Navbar';
import Drop from '../Components/Drop';

import { AiOutlineArrowRight } from 'react-icons/ai';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 3vw;

    background-color: #C8C8C8;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const DropPage = () => {
  return (
    <Page>
      <Navbar1/>
      <MainContents>
      <ShopDescription shopname="Core 1 Stationery" shoptype="Stationery Store" phone="1234567890" adress="Core-1 building near lecture hall, IITG" status="Open Now" distance="800m" checkpoint="Central Library" noofreviews="14" services={["Color Printing","Framing","Paper Cutting"]} />
        <Drop/>
      </MainContents>
    </Page>
  )
}

export default DropPage
