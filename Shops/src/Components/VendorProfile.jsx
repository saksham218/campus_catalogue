import React from 'react';
import styled from 'styled-components';
import VendorPic from "../Assets/VendorPic.png";

const Box = styled.div`
    background: #fff;
    border-radius: 8px;

    width: 24vw;
    height: 30vw;

    padding: 1vw;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    font-family: 'Inter', sans-serif;

`

const Title = styled.div`
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: black;

    display: flex;
    gap: 1vw;
`

const NormalText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: black;
`

const VendorProfile = (props) => {
  const shop = props.shop;
  return (
    <Box>
      

        <img src={shop.basic_info.image?shop.basic_info.image :VendorPic} alt="" />
        <h1>{shop.basic_info.name?shop.basic_info.name:"Vendor Name"}</h1>
        <br></br>
        <Title>PH No.--- <NormalText>{shop.basic_info.phone?shop.basic_info.phone:"1234567890"}</NormalText></Title>
        <Title>EMAIL--- <NormalText>{shop.basic_info.email?shop.basic_info.email:"xxxxxxxxxxxx@gmail.com"}</NormalText></Title>
    </Box>
  )
}

export default VendorProfile