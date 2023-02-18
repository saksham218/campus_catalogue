import React from 'react';
import styled from 'styled-components';
import Profile from "../../Assets/Profile.png";
import ProfileText from "../../Assets/ProfileText.png";
import Cart from "../../Assets/Cart.png";
import Notifications from "../../Assets/Notifications.png";
import User from "../../Assets/User.png";

const Navbar = styled.div`
    /* width: 82vw; */
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

const Option = styled.button`
    display: flex;
    height: 4.5vw;
    padding: 0.3vw;
    flex-direction: row;
    align-items: center;
    gap: 0.65vw;
    border: none;
    background-color: transparent;
    /* cursor: pointer; */

    :hover{
        border-bottom: 2.5px solid black;
    }
`

const Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 2vw;
    color: #000000;
`

function Navbar1(props) {
  return (
    <Navbar>
        <Description>
            <img src={Profile} alt={Profile} style={{height:"4vw",width:"5vw"}}/>
            <img src={ProfileText} alt={ProfileText} style={{height:"3vw",width:"28vw"}}/>
        </Description>
        <Option>
            <img src= {Cart} alt={Cart} style={{height:"2vw",width:"2vw"}}/>
            <Text>
                Cart
            </Text>
        </Option>
        <Option>
            <img src= {Notifications} alt={Notifications} style={{height:"2vw",width:"2vw"}}/>
            <Text>
                Notifications
            </Text>
        </Option>
        <Option>
            <img src= {User} alt={User} style={{height:"2vw",width:"2vw"}}/>
            <Text>
                User Name
            </Text>
        </Option>
    </Navbar>
  )
}

export default Navbar1;