import React from 'react';
import styled from 'styled-components';
import Navbar1 from "../Components/Navbar/Navbar";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #D9D9D9;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2vw;
`

const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    background-color: white;

`

const CartList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    background-color: white;
`

const ShopCart = (props) => {
  return (
    <Page>
        <Navbar1/>
        <MainContents>
            <OrderList>
                <div style={{display: "flex", flexDirection: "row", gap: "2vw"}} >
                    <h2>{props.order?props.order:"Order 1"}</h2>
                    <h2>:</h2>
                    <h2>{props.cost?props.cost:"$ 000"}</h2>
                </div>
                <button style={{padding: "0.5vw 1vw",backgroundColor: "black",borderRadius: "2vw",color: "white"}} >Proceed to Payment</button>
            </OrderList>
            <CartList>
                <h2>{props.order?props.order:"Order 1"}</h2>
            </CartList>
        </MainContents>
    </Page>

  );
}

export default ShopCart