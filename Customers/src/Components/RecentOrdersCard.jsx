import React from 'react';
import styled from 'styled-components';
import itempic from "../assets/Itempic.png";

const Card = styled.div`
    width: 75vw;
    height: 15vw;
    padding: 2vw;

    display: flex;
    flex-direction: row;
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
    justify-content: space-around;
`

const Item3 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vw;

    flex-grow: 1;
    text-align: right;

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
            <button>Cancel Order</button> 
        </Item3>
    </Card>
  )
}

export default RecentOrdersCard;