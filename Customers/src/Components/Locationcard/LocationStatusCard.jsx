import React from 'react';
import styled from 'styled-components';
import Locator from "../../assets/Locator.png";

const Container = styled.div`
    width: 11vw;
    height: 45vw;
    /* position: fixed; */
    display: flex;
    flex-direction: column;
    gap: 2vw;
    /* justify-content: center; */
    padding: 1vw;
    background-color: white;
    border-radius: 3px;
`

const Box = styled.div`
    width: 9vw;
    height: 12vw;
    padding: 1vw;
    display: flex;
    text-align: left;
    flex-direction: column;
    border-radius: 3px;
    background-color: #D9D9D9;
`

const OtherText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #7B7B7B;
    text-align: left;
`

const Heading_Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
`

const Text2 = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #5A5A5A;
    text-align: left;
`

const Number = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 100px;
    color: black;
    text-align: center;
    align-self: center;
`

const Button = styled.button`
    border: none;
    background-color: transparent;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: black;
`

const LocationStatusCard = (props) => {
  return (
    <Container>
        <Box>
            <OtherText>
                Found
            </OtherText>
            <Number>
                {props.number}
            </Number>
            <OtherText>
                shops nearby
            </OtherText>
        </Box>
        <img src={Locator} alt="" width={"33px"} style={{alignSelf: "center"}}/>
        <Heading_Text>
            Your Location
        </Heading_Text>
        <Text2>
            {props.adress}
        </Text2>
        <br></br>
        <Button>Change Location</Button>
    </Container>
  )
}

export default LocationStatusCard