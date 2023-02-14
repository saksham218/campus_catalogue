import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import ProfilePic from "../assets/ProfilePic";
import vector from "../assets/vector.png"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
    padding: 3vw;
`

const Header = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: black;
`

const Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: black;
`

const Detatils = styled.div`
    display: flex;
    justify-content: space-around;
`

const Blurred = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #7B7B7B;
`

const Orders = styled.a`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StudentProfile = props => {
  return (
    <Box>
        <img src={ProfilePic} alt="" />
        <Header>
            {props.username}
        </Header>
        <Text>
            {props.occupation?props.occupation:"Student"}
        </Text>
        <Text>
            {props.phone}
        </Text>
        <Text>
            {props.email}
        </Text>
        <Detatils>
            <Text>
                Hostel
            </Text>
            :
            <Text>
                {props.hostel}
            </Text>
        </Detatils>
        <Detatils>
        <Text>
                Room
            </Text>
            :
            <Text>
                {props.room}
            </Text>
        </Detatils>
        <Blurred>Edit Text</Blurred>
        <Orders href='#' >
            <Header>My Orders</Header>
            <img src={vector} alt="" />
        </Orders>
    </Box>
  )
}

StudentProfile.propTypes = {
    
}

export default StudentProfile;