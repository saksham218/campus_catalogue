import React from "react";
import styled from "styled-components";

import ShopDescription from "../Components/ShopDescription";
import ItemCard from "../Components/ItemCard";
import Navbar1 from "../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import { getShop } from "../apis/api";

const { id } = useParams();
shop=getShop(id)
console.log(shop);

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

const shopCatalogue = () => {
  return (
    <Page>
      <Navbar1 />
      <MainContents>
        <ShopDescription
          name={shop.basic_info.name||"Core 1 Stationery"}
          // ownername={prop.basic_info.owner||"Mr. XYZ"}
          // email={prop.basic_info.email||"ab@iitg.ac.in"}
          phone={prop.basic_info.phone||"1234567890"}
          category={prop.category||"Stationery"}
          address={prop.address||"Core 1 Stationery, IITG"}
          //TODO:get status
          status={prop.status||"Open Now"}
          distance={prop.distance||"800m"}
          checkpoint={prop.landmark||"Central Library"}
          noofreviews={prop.reviews||"14"}
          services={prop.services||["Color Printing", "Framing", "Paper Cutting"]}
        />
        <Container>
          <a
            href="#"
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

export default shopCatalogue;
