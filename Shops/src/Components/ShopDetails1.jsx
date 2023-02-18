import React from 'react';
import styled from 'styled-components';

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

const ShopDetails1 = () => {
  return (
    <Container>
        <Header>Add Shop Details</Header>
        <SubHeader>Shop Name</SubHeader>
        <Input type="text" placeholder="Enter Shop Name" />
        <SubHeader>Category</SubHeader>
        <Input type="text" placeholder="Enter Category" />
        <SubHeader>Shop Contact Number</SubHeader>
        <Input type="text" placeholder="Enter Shop Contact Number" />
        <SubHeader>Shop Address</SubHeader>
        <Input type="text" placeholder="Enter Shop Address" />
        <SubHeader>Landmark</SubHeader>
        <Input type="text" placeholder="Enter nearest Landmark" />
    </Container>
  )
}

export default ShopDetails1