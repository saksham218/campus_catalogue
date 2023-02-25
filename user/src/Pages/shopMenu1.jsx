import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShopDescription from "../Components/ShopDescription";
import ItemCard from "../Components/ItemCard2";
import Navbar1 from "../Components/Navbar/Navbar";
import { getShop,getShopMenu,addOrder } from "../apis/api";

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

const ShopMenu1 = () => {

  const {id} = useParams();
  
  const [shop, setShop] = useState({})
  const [shopMenu, setShopMenu] = useState([])

  const itemsInit = Array.from(shopMenu, (item) => {return {item: item._id, quantity: 0}})
  // console.log([...itemsInit,'test1'])

  const [items,setItems] = useState([])
  let x=1;
  useEffect(() => {
    setItems([...itemsInit])
    if(x===1){
      getShop(id).then(res=>{setShop(res.data); x=0})
      getShopMenu(id).then(res=>{setShopMenu(res.data); x=0})
    }
  },[[...itemsInit],setItems])

  console.log(items)

  const handleIncrement = (idx) => {
    const temp = [...items]
    temp[idx].quantity = temp[idx].quantity + 1
    setItems([...temp])
  }

  const handleDecrement = (idx) => {
    const temp1 = [...items]
    temp1[idx].quantity = temp1[idx].quantity - 1
    setItems([...temp1])
  }


  return (
    <Page>
      <Navbar1 />
      <MainContents>
        <ShopDescription
          name={shop?.basic_info?.name||"Core 3 Stationery"}
          // ownername={shop.basic_info.owner||"Mr. XYZ"}
          // email={shop.basic_info.email||"ab@iitg.ac.in"}
          phone={shop?.basic_info?.phone||"1234567890"}
          category={shop?.basic_info?.category||"Stationery"}
          address={shop?.basic_info?.address||"Core 1 Stationery, IITG"}
          //TODO:get status
          status={shop?.status||"Open Now"}
          distance={shop?.distance||"800m"}
          checkpoint={shop?.basic_info?.landmark||"Central Library"}
          noofreviews={shop?.reviews||"14"}
          services={["Food"]}
        />
        <Container>
          <div
            style={{
              backgroundColor: "white",
              textAlign: "left",
              width: "60vw",
              padding: "0.5vw 1.25vw 0.5vw 1.25vw",
              border: "1px solid black"
            }}
          >
            <h1>Menu</h1>
          </div>
          {
            shopMenu.map((item, idx)=>{
              return <ItemCard
              key={item._id}
              itemname={item.name}
              cost={'₹' + item.price/100}
              availability={item.availability}
              preptime={item.prep_time} 
              handleIncrement = {handleIncrement}
              handleDecrement = {handleDecrement}
              idx={idx}
              />
            })
          }
          {/* <ItemCard
            itemname="Item Name"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
          <ItemCard
            itemname="Item Name"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"

          />
          <ItemCard
            itemname="Item Name"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
          <ItemCard
            itemname="Item Name"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          />
          <ItemCard
            itemname="Item Name"
            cost="$ XXX"
            availability="Available"
            preptime="20mins"
          /> */}
        </Container>
      </MainContents>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}} >
      <button style={{padding: "1vw 2vw",borderRadius: "2vw",backgroundColor: "white",fontSize: "1.6vw",width: "20vw"}} > Add To Cart </button>
      </div>
    </Page>
  );
};

export default ShopMenu1;
