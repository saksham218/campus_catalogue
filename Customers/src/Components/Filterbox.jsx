import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { easeOut, motion, spring } from 'framer-motion';

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

const Box = styled(motion.div)`
    text-align: left;
    width: 19vw;
    height: 8vw;
    padding: 0.83vw;
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    background-color: white;
    border-radius: 5px;
`

const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.3vw;
`

const Heading_Text = styled(motion.div)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
`

const Button = styled(motion.div)`
    cursor: pointer;
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
`

const Filterbox = (props) => {
  
  var color1='white',textcolor1='black';
  var color2='white',textcolor2='black';
  var color3='white',textcolor3='black';
  
  const [status,setStatus] = useState(0);
  const [status2,setStatus2] = useState(0);
  const [status3,setStatus3] = useState(0);

  if (status%2==1){
    color1='black';
    textcolor1='white';
  }
  else{
    color1='white';
    textcolor1='black';
  }

  if (status2%2==1){
    color2='black';
    textcolor2='white';
  }
  else{
    color2='white';
    textcolor2='black';
  }

  if (status3%2==1){
    color3='black';
    textcolor3='white';
  }
  else{
    color3='white';
    textcolor3='black';
  }

  return (
    <Box
    className='container'
    variants={container}
    initial="hidden"
    animate="visible"
    transition={{ease: easeOut}}
    >
      <Heading_Text
      className='item'
      variants= {item}
      >
        Filter:
      </Heading_Text>
      <Row2>
        <Button style={{backgroundColor:color1,color:textcolor1}}
        onClick= {()=>setStatus(prevStatus => {console.log(prevStatus);return (prevStatus+1);})}
        className='item'
        variants= {item}
        whileHover={{scale: 1.05,backgroundColor: "black",color: "white"}}
        whileTap={{scale: 0.8}}
        // transition={{type: spring}}
        >
          {props.status}
        </Button>
        <Button style={{backgroundColor:color2,color:textcolor2}}
        onClick= {()=>setStatus2(prevStatus => {console.log(prevStatus);return (prevStatus+1);})}
        className='item'
        variants={item}
        whileHover={{scale: 1.05,backgroundColor: "black",color: "white"}}
        whileTap={{scale: 0.8}}
        // transition={{type: spring}}
        >
          {props.type}
        </Button>
      </Row2>
      <Button style={{backgroundColor:color3,color:textcolor3}}
      onClick= {()=>setStatus3(prevStatus => {console.log(prevStatus);return (prevStatus+1);})}
      className= 'item'
      variants={item}
      whileHover={{scale: 1.05,backgroundColor: "black",color: "white"}}
      whileTap={{scale: 0.8}}
      // transition={{type: spring}}
      >
        {props.service}
      </Button>
    </Box>
  )
}

export default Filterbox;