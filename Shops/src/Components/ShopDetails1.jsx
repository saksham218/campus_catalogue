import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    padding: 2vw;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 80vw;
`

const Header = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 36px;
    font-weight: 500;
    text-align: left;
`

const SubHeader = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-align: left;
`

const Text = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #94A3B8;
`

const Input = styled.input`
    background: #F7F9FC;
    border: 1px solid #e4e2f038;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 1vw;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: black;
    height: 4vw;
`

const ShopDetails1 = (props) => {
  return (
    <Container>
        <Header>Add Shop Details</Header>
        <SubHeader>Shop Name</SubHeader>
        <Input type="text" placeholder="Enter Shop Name" value={props.name} onChange={(e)=>{props.setName(e.target.value)}}/>
        <SubHeader>Shop Owner Name</SubHeader>
        <Input type="text" placeholder="Enter Owner Name" value={props.owner_name} onChange={(e)=>{props.setOwnerName(e.target.value)}}/>
        <SubHeader>Shop Contact Number</SubHeader>
        <Input type="number" placeholder="Enter Shop Contact Number" value={props.phone} onChange={(e)=>{props.setPhone(e.target.value)}}/>
        <SubHeader>GSTIN</SubHeader>
        <Input type="text" placeholder="Enter Shop GST Number" value={props.gstin} onChange={(e)=>{props.setGstin(e.target.value)}}/>
        <SubHeader>Category</SubHeader>
        <select placeholder="Enter Category" id="category" value={props.category} onChange={(e)=>{props.setGstin(e.target.value)}}>
            <option value="Canteen">Canteen</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Stationary">Stationary</option>
            <option value="Juice Center">Juice Center</option>
            <option value="Rental">Rental</option>
            <option value="Bakery">Bakery</option>
            <option value="Other">Other</option>
        </select>

        <SubHeader>Shop Address</SubHeader>
        <Input type="text" placeholder="Enter Shop Address" value={props.address} onChange={(e)=>{props.setAddress(e.target.value)}}/>
        <SubHeader>Landmark</SubHeader>
        <Input type="text" placeholder="Enter nearest Landmark" value={props.landmark} onChange={(e)=>{props.setLandmark(e.target.value)}}/>
    </Container>
  )
}

export default ShopDetails1