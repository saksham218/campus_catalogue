import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState,useEffect } from 'react';

import Navbar1 from "../Components/Navbar";
import ShopDetails1 from "../Components/ShopDetails1";
import ShopDetails2 from "../Components/ShopDetails2";
 
import { useSearchParams } from "react-router-dom";
import { firstDetails } from '../apis/api';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: #c8c8c8;
    /* height: 140vh; */
  padding-bottom: 5vw;

`

const MainContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ShopDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenn = searchParams.get("token");
    if (tokenn) {
      setToken(tokenn);
    }
  }, [])
  
  const [name, setName] = useState("");
  const [owner_name, setOwnerName] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [gstin, setGstin] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(null);
  const [close, setClose] = useState(null);
  const [image, setImage] = useState("");
  const [bank_details, setBankDetails] = useState({
            accno: "",
            ifsc: "",
            acc_holder_name: "",
            is_default: true
  });
  const [VPA, setVPA] = useState("");
  const [is_bank, setIsBank] = useState(true);
  const firstdetail = (e) => {
    e.preventDefault();
    const data = {
      "name" : name,
      "owner_name": owner_name,
      "phone": phone, 
      "address": address,
      "gstin": gstin,
      "landmark": landmark,
      "lat": "XVXVXVXV",
      "lon": "BVBVBVBV",
      "open": open,
      "close": close,
      "image" : image,
      "category": category,
      "payment": {
          "vpa": !is_bank ?[{
              "id": VPA,
              "is_default": !is_bank
          }]:[],
          "bank_account":is_bank ?[{
              "accno": bank_details.accno,
              "ifsc": bank_details.ifsc,
              "acc_holder_name": bank_details.acc_holder_name,
              "is_default": is_bank
          }]:[]
      },
      "token":token
    }
    console.log(data);
    firstDetails(data).then((res) => {
      console.log(res);
      // TODO: redirect to waiting page
    }).catch((err) => {
      console.log(err.response.status, err.response.data);
    })
  }
  return (
    <Page>
        <Navbar1 />
        <MainContents>
            <ShopDetails1 name={name} setName={setName} owner_name={owner_name} setOwnerName={setOwnerName} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} landmark={landmark} setLandmark={setLandmark} gstin={gstin} setGstin={setGstin} category={category} setCategory={setCategory}/>
            <ShopDetails2 open={open} setOpen={setOpen} close={close} setClose={setClose} image={image} setImage={setImage} bank_details={bank_details} setBankDetails={setBankDetails} VPA={VPA} setVPA={setVPA} is_bank={is_bank} setIsBank={setIsBank} firstdetail={firstdetail}/>
        </MainContents>
    </Page>
  )
}

export default ShopDetails;