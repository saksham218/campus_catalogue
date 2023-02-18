import React from 'react';
import styled from 'styled-components';
import itempic from "../assets/Itempic.png";

const Card = styled.div`
    width: 75vw;
    height: 12vw;
    padding: 2vw;
    border: 1px solid black;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;
    background-color: #D9D9D9;`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

const Header = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
`

const Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: black;
`

const Detatils = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1vw;
`

const Item3 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vw;

    flex-grow: 1;
    text-align: right;
    align-items: flex-end;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: black;
`

const RecentOrdersCard = () => {
  return (
    <Card>
        <img src={itempic} alt="" />
        <Description>
            <Header>
                Item Name
            </Header>
            <Text>
                Item Description
            </Text>
            <Detatils>
                <Text>
                    Status
                </Text>
                :
                <Text>
                    Pending
                </Text>
            </Detatils>
            <Detatils>
                <Text>
                    Order Number
                </Text>
                :
                <Text>
                    123456789
                </Text>
            </Detatils>
            <Detatils>
                <Header>
                    OTP
                </Header>
                :
                <Header>
                    123456
                </Header>
            </Detatils>
        </Description>
        <Item3>
            $ XXX
            <button style={{width: "12vw", padding: "0.5vw 2vw", borderRadius: "4vw", fontSize: "20px"}} >Cancel Order</button> 
        </Item3>
    </Card>
  )
}

export default RecentOrdersCard;