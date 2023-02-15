import React from 'react';
import styled from 'styled-components';
import shopimg from '../Assets/shopimg.png';
import { motion,spring } from 'framer-motion';
import Rating from '@mui/material/Rating';
import { BsFillPinMapFill } from 'react-icons/bs';

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
    width: 20vw;
    height: 58.5vw;
    /* position: fixed; */
    display: flex;
    flex-direction: column;
    gap: 2vw;
    align-items: center;
    /* justify-content: center; */
    padding: 1vw;
    background-color: white;
    border-radius: 3px;
`

const Header = styled(motion.div)`
    display: flex;
    flex-direction: column;
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
    /* cursor: pointer; */

    display: flex;
    align-items: center;
    justify-content: center;

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
  gap: 0.5vw;
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
  background-color: white;

  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 0.5vw;
  padding-bottom: 0.5vw;
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
            <br></br>
            <Heading_Text>
                {props.phone}
            </Heading_Text>
            <Heading_Text>
                {props.adress}
            </Heading_Text>
            <br></br>
            <div style={{display: 'flex',alignItems: "center",justifyContent: "center"}} >
            <Button whileHover={{scale: 1.05}} transition={{type: spring}} >
              <Heading_Text >{props.status}</Heading_Text>
            </Button>
            </div>
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
          <BsFillPinMapFill/>  Pin this Shop
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