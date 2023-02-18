import React from 'react';
import styled from 'styled-components';
import shopimg from "../../Assets/Shop.png";
import { motion,spring } from 'framer-motion';

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

const Card = styled(motion.div)`
    height: 16vw;
    width: 30vw;
    /* border-radius: 5px; */
    display: flex;
    flex-direction: column;
    padding: 1.68vw;
    background-color: #D9D9D9;
    text-align: left;
    gap: 1.2vw;
`

const Header = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.96vw;
`

const Description = styled(motion.div)`
    display: flex;
    flex-direction: column;
`

const Button = styled(motion.div)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 19.2px;
    border: 2px solid black;
    border-radius: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 24px;
    padding-right: 24px;
    max-width: fit-content;

    :hover{
        box-shadow: 0.1vw black;
    }
`

const Heading_Text = styled(motion.div)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
`

const Other_Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 19.2px;
    color: #5A5A5A;
`

function PinnedCards(props) {
  return (
    <Card
    className='container'
    variants={container}
    initial="hidden"
    animate="visible"
    whileHover={{scale:1.01}}
    transition={{type:spring}}
    >
        <Header
        className='item'
        variants= {item}
        >
            <img src={shopimg} alt={props.name?props.name:"Core 1 stationery"} />
            <Heading_Text>{props.name?props.name:"Core 1 Stationery"}</Heading_Text>
        </Header>
        <Description
        className='item'
        variants= {item}
        >
            <Other_Text>
                {props.category?props.category:"Grocery"}
            </Other_Text>
            <Heading_Text>
                {props.address?props.address:"1234 Main Street"}
            </Heading_Text>
            <br></br>
            <Button whileHover={{scale: 1.05}} transition={{type: spring}} ><Heading_Text >{props.status?props.status:"Open Now"}</Heading_Text></Button>
        </Description>
        <Other_Text
        className='item'
        variants= {item}
        >
            {props.distance?props.distance:"800"} away from {props.checkpoint?props.checkpoint:"Library"}
        </Other_Text>
    </Card>
  );
}

export default PinnedCards;