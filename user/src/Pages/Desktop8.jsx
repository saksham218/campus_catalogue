import React from "react";
import styled from "styled-components";

import ShopDescription from "../Components/ShopDescription";
import ItemCard from "../Components/ItemCard2";
import Navbar1 from "../Components/Navbar/Navbar";

import { AiOutlineArrowRight } from "react-icons/ai";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 3vw;

  background-color: #c8c8c8;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 2vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2vw; */
`;

const Desktop8 = () => {
  return (
    <Page>
      <Navbar1 />
      <MainContents>
        <ShopDescription
          shopname="Lohit Canteen"
          shoptype="Canteen"
          phone="1234567890"
          adress="Lohit Hostel IITG"
          status="Open Now"
          distance="800m"
          checkpoint="Disang"
          noofreviews="14"
          services={["Food"]}
        />
        <Container>
          <div
            style={{
              backgroundColor: "white",
              textAlign: "left",
              width: "60vw",
              padding: "0.5vw 1.25vw 0.5vw 1.25vw",
            }}
          >
            <h1>Menu</h1>
          </div>
          <ItemCard
            itemname="Item Name"
            shopname="Lohit Canteen"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Lohit Canteen"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Lohit Canteen"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Lohit Canteen"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Lohit Canteen"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
        </Container>
      </MainContents>
    </Page>
  );
};

export default Desktop8;
