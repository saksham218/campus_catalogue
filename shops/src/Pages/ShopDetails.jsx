import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

import Navbar1 from "../Components/Navbar";
import ShopDetails1 from "../Components/ShopDetails1";
import ShopDetails2 from "../Components/ShopDetails2";
 
import { useSearchParams } from "react-router-dom";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
    height: 140vh;
`

const MainContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ShopDetails = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [token, setToken] = useState("");

  // const tokenn = searchParams.get("token");
  // if (tokenn) {
  //   setToken(tokenn);
  // }
  const [name, setName] = useState("");
  const [owner_name, setOwnerName] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [gstin, setGstin] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(0);
  const [close, setClose] = useState(0);
  const [image, setImage] = useState("");
  const [bank_details, setBankDetails] = useState({
            accno: "",
            ifsc: "",
            acc_holder_name: "",
            is_default: true
  });
  const [VPA, setVPA] = useState("");
  return (
    <Page>
        <Navbar1 />
        <MainContents>
            <ShopDetails1 name={name} setName={setName} owner_name={owner_name} setOwnerName={setOwnerName} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} landmark={landmark} setLandmark={setLandmark} gstin={gstin} setGstin={setGstin} category={category} setCategory={setCategory}/>
            <ShopDetails2 />
        </MainContents>
    </Page>
  )
}

export default ShopDetails;