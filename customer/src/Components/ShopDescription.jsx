import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

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

const Container = styled.div`
    width: 11vw;
    height: 45vw;
    /* position: fixed; */
    display: flex;
    flex-direction: column;
    gap: 2vw;
    /* justify-content: center; */
    padding: 1vw;
    background-color: white;
    border-radius: 3px;
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

const Rate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Pin = styled.button`
  border: 1px solid #000000;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #5A5A5A;
`

const ShopDescription = (props) => {
  return (
    <Container
    className='container'
    variants= {container}>
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
        <Rate>
          <Rating name="size-small" defaultValue={0} size="small" />
          {props.noofreviews} reviews
        </Rate>
        <Pin>
          Pin this Shop
        </Pin>
        <Heading_Text>
          Services:
        </Heading_Text>
        <Other_Text>
          {props.services.map(services => " "+ services +"," )}
        </Other_Text>
    </Container>
  )
}

export default ShopDescription