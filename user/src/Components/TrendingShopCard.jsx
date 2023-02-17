import React from 'react';
import styled from "styled-components";
import shopimg from "../assets/Shop.png";

const Card = styled.div`
  width: 37.3vw;
  height: 8.4vw;
  padding: 2vw;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  background-color: #D9D9D9;
  border-radius: 2px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Button = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 0.1vw 0.5vw;
  
  position: absolute;
  right: 0;
  bottom: 0;

  background-color: transparent;
  `

function TrendingShopCard(props) {
  return (
    <Card>
      <Header>
        <img src={shopimg} alt="shop" />
        <h3>{props.shopname}</h3>
      </Header>
      <p>{props.shoptype}</p>

      <Button>View Shop</Button>
    </Card>
  );
}

export default TrendingShopCard;