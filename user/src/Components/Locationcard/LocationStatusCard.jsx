import React from 'react';
import styled from 'styled-components';
import Locator from "../../Assets/Locator.png";
import { motion,spring,easeOut} from 'framer-motion';

const container = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
        duration: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

const Container = styled(motion.div)`
    width: 14.3vw;
    height: 58.5vw;
    /* position: fixed; */
    display: flex;
    flex-direction: column;
    gap: 2.6vw;
    /* justify-content: center; */
    padding: 1.3vw;
    background-color: white;
    border-radius: 3px;

    /* scale: 1.2; */
`

const Box = styled(motion.div)`
    width: 11.7vw;
    height: 15.6vw;
    padding: 1.3vw;
    display: flex;
    text-align: left;
    flex-direction: column;
    border-radius: 3px;
    background-color: #D9D9D9;
`

const OtherText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: #7B7B7B;
    text-align: left;
`

const Heading_Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #000000;
`

const Text2 = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20.8px;
    color: #5A5A5A;
    text-align: left;
`

const Number = styled(motion.div)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 130px;
    color: black;
    text-align: center;
    align-self: center;
`

const Button = styled(motion.button)`
    border: none;
    background-color: transparent;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20.8px;
    color: black;

    cursor: pointer;
`

const LocationStatusCard = (props) => {
  return (
    <Container
    className='container'
    variants={container}
    initial="hidden"
    animate="visible"
    transition={{ease: easeOut}}
    >
        <Box
        className='item'
        variants= {item}
        >
            <OtherText
            className='item'
            variants= {item}
            >
                Found
            </OtherText>
            <Number
            className='item'
            variants= {item}
            >
                {props.number}
            </Number>
            <OtherText
            className='item'
            variants= {item}
            >
                shops nearby
            </OtherText>
        </Box>
        <motion.img src={Locator} alt="" width={"33px"} style={{alignSelf: "center"}}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -0,
              borderRadius: "100%"
            }}
        />
        <Heading_Text
        className='item'
        variants= {item}
        >
            Your Location
        </Heading_Text>
        <Text2
        className='item'
        variants= {item}
        >
            {props.adress}
        </Text2>
        <br></br>
        <Button
        className='item'
        variants= {item}
        whileHover={{ scale: 1.1 }}
        >Change Location</Button>
    </Container>
  )
}

export default LocationStatusCard