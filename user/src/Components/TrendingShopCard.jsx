import React from 'react';
import styled from "styled-components";
import shopimg from "../assets/Shop.png";

const Card = styled.div`
  width: 35.6vw;
  height: 6vw;
  padding: 2vw;
  position: relative;
  display: flex;
  flex-direction: column;
  /* gap: 1vw; */
  /* align-items: center; */
  background-color: #D9D9D9;
  border-radius: 2px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1vw;
`

const Button = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 0.5vw 1vw;
  
  position: absolute;
  right: 2.5vw;
  bottom: 2vw;

  background-color: transparent;
  `

function TrendingShopCard(props) {
  return (
    <Card>
      <Header>
        <img src={shopimg} alt="shop" />
        <h2>{props.shopname}</h2>
      </Header>
      <h3>{props.shoptype}</h3>

      <Button>View Shop</Button>
    </Card>
  );
}

export default TrendingShopCard;