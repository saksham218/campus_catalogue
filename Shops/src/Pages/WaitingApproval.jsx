import React from 'react';
import "./loader.css";
import styled from 'styled-components';

const Loader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const WaitingApproval = () => {
  return (
    <Loader>
        <h1>Please wait while the ADMIN approves your request...</h1>
        <span class="loader"></span>
    </Loader>
  )
}

export default WaitingApproval;