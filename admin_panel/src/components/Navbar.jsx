import React from 'react';
import styled from 'styled-components';
import Profile from "../assets/Profile.png";
import ProfileText from "../assets/ProfileText.png";
import Cart from "../assets/Cart.png";
import Notifications from "../assets/Notifications.png";
import User from "../assets/User.png";

const Navbar = styled.div`
    width: 84vw;
    height: 5vw;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 4vw;
    align-items: center;
    padding-left: 123px;
    padding-right: 123px;
    background-color: #FFFFFF;
`

const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.875vw;
    width: 20vw;
    flex-grow: 1;
`

const Option = styled.div`
    display: flex;
    height: 4.5vw;
    padding: 0.3vw;
    flex-direction: row;
    align-items: center;
    gap: 0.65vw;
    cursor: pointer;

    :hover{
        border-bottom: 2.5px solid black;
    }
`

const Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
`

function Navbar1(props) {
  return (
    <Navbar>
        <Description>
            <img src={Profile} alt={Profile} />
            <img src={ProfileText} alt={ProfileText} />
        </Description>
        <Option>
            <img src= {Cart} alt={Cart} />
            <Text>
                Cart
            </Text>
        </Option>
        <Option>
            <img src= {Notifications} alt={Notifications} />
            <Text>
                Notifications
            </Text>
        </Option>
        <Option>
            <img src= {User} alt={User} />
            <Text>
                User Name
            </Text>
        </Option>
    </Navbar>
  )
}

export default Navbar1;