import React from "react";
import styled from "styled-components";

import ShopDescription from "../Components/ShopDescription";
import ItemCard from "../Components/ItemCard";
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

const shopMenu = () => {
  return (
    <Page>
      <Navbar1 />
      <MainContents>
        <ShopDescription
          shopname="Core 1 Stationery"
          shoptype="Stationery Store"
          phone="1234567890"
          adress="Core-1 building near lecture hall, IITG"
          status="Open Now"
          distance="800m"
          checkpoint="Central Library"
          noofreviews="14"
          services={["Color Printing", "Framing", "Paper Cutting"]}
        />
        <Container>
          <a
            href="/print"
            style={{
              textDecoration: "none",
              height: "4vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#16153D",
                color: "white",
                textAlign: "left",
                width: "60vw",
                padding: "0vw 1.25vw",
              }}
            >
              <h1
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Send Items For Print <AiOutlineArrowRight />{" "}
              </h1>
            </div>
          </a>
          <div
            style={{
              backgroundColor: "white",
              textAlign: "left",
              width: "60vw",
              padding: "0.5vw 1.25vw 0.5vw 1.25vw",
            }}
          >
            <h1>Catalogue</h1>
          </div>
          <ItemCard
            itemname="Item Name"
            shopname="Core 1 Stationery"
            cost="$ XXX"
            availability="Available"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Core 1 Stationery"
            cost="$ XXX"
            availability="Available"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Core 1 Stationery"
            cost="$ XXX"
            availability="Available"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Core 1 Stationery"
            cost="$ XXX"
            availability="Available"
          />
          <ItemCard
            itemname="Item Name"
            shopname="Core 1 Stationery"
            cost="$ XXX"
            availability="Available"
          />
        </Container>
      </MainContents>
    </Page>
  );
};

export default shopMenu;
