import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ShopDescription from "../Components/ShopDescription";
import ItemCard from "../Components/ItemCard";
import Navbar1 from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import { getShop } from "../apis/api";

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

const ShopMenu = () => {
  
  const {id} = useParams();
  console.log(id)
  const [shop, setShop] = useState({})
  useEffect(() => getShop(id).then(res => setShop(res.data)),[])

  console.log("-----shopmenu",shop)
  console.log(shop?.basic_info?.name)

  return (
    <Page>
      <Navbar1 />
      <MainContents>
        <ShopDescription
          name={shop?.basic_info?.name||"Core 3 Stationery"}
          // ownername={shop.basic_info.owner||"Mr. XYZ"}
          // email={shop.basic_info.email||"ab@iitg.ac.in"}
          phone={shop?.basic_info?.phone||"1234567890"}
          category={shop?.basiv_info?.category||"Stationery"}
          address={shop?.basic_info?.address||"Core 1 Stationery, IITG"}
          //TODO:get status
          status={shop?.status||"Open Now"}
          distance={shop?.distance||"800m"}
          checkpoint={shop?.basic_landmark||"Central Library"}
          noofreviews={shop?.reviews||"14"}
          services={shop?.services||["Color Printing", "Framing", "Paper Cutting"]}
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
      <br></br>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}} >
      <button style={{padding: "1vw 2vw",borderRadius: "2vw",backgroundColor: "white",fontSize: "1.6vw",width: "20vw"}} > Add To Cart </button>
      </div>
    </Page>
  );
};

export default ShopMenu;
