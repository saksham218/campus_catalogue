import React from 'react';
import styled from 'styled-components';
import shopimg from "../assets/Shop.png";
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
    height: 15vw;
    width: 19vw;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 1.4vw;
    background-color: white;
    text-align: left;
    gap: 1vw;
`

const Header = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8vw;
`

const Description = styled(motion.div)`
    display: flex;
    flex-direction: column;
`

const Button = styled(motion.div)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    border: 2px solid black;
    border-radius: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: fit-content;
    cursor: pointer;

    :hover{
        box-shadow: 0.1vw black;
    }
`

const Heading_Text = styled(motion.div)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
`

const Other_Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #5A5A5A;
`

function Cards(props) {
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
            <img src={shopimg} alt={props.shopname} />
            <Heading_Text>{props.shopname}</Heading_Text>
        </Header>
        <Description
        className='item'
        variants= {item}
        >
            <Other_Text>
                {props.shoptype}
            </Other_Text>
            <Heading_Text>
                {props.adress}
            </Heading_Text>
            <br></br>
            <Button whileHover={{scale: 1.05}} transition={{type: spring}} ><Heading_Text >{props.status}</Heading_Text></Button>
        </Description>
        <Other_Text
        className='item'
        variants= {item}
        >
            {props.distance} away from {props.checkpoint}
        </Other_Text>
    </Card>
  );
}

export default Cards;