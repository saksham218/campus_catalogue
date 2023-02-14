import React from 'react';
import IITG from "../assets/IITG.svg";
import styled from 'styled-components';
import Loader from "../Components/LoaderMui";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5vw;
`

const SplashScreen = () => {
  return (
    <div>
        <Container>
            <img src={IITG} alt="IITG" />
            <Loader/>
        </Container>
    </div>
  )
}

export default SplashScreen