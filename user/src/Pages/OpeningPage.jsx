import React from 'react';
import styled from "styled-components";
import { Backend_URL } from "../../../admin_panel/src/utilities/config";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #c8c8c8;

    gap: 2vw;
`

const Button = styled.a`
    border: 2px solid black;
    border-radius: 10px;
    font-family: 'Inter',sans-serif;
    font-weight: 500;
    font-size: 20px;
    background-color: white;
    width: max-content;
`

const OpeningPage = () => {
  return (
    <Page>
        <Button href='#' >
            <GrUserAdmin/>  SIGN IN for ADMIN
        </Button>
        <Button href='#' >
            <BsMicrosoft/>  SIGN IN for STUDENTS
        </Button>
        <Button href='#' >
            <FcGoogle/>  SIGN IN for SHOP OWNER
        </Button>
    </Page>
  )
}

export default OpeningPage