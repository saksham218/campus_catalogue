import React from 'react';
import styled from 'styled-components';
import VendorPic from "../Assets/VendorPic";

const Box = styled.div`
    background: #fff;
    border-radius: 8px;

    width: 22.4vw;
    height: 33.5vw;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    font-family: 'Inter', sans-serif;

`

const VendorProfile = (props) => {
  return (
    <Box>
        {VendorPic}
        <h1>{props.name?props.name:"Vendor Name"}</h1>
        <br></br>
        <h2>PH No.--- {props.phone?props.phone:"1234567890"}</h2>
        <h2>EMAIL--- {props.email?props.email:"xxxxxxxxxxxx@gmail.com"}</h2>
    </Box>
  )
}

export default VendorProfile