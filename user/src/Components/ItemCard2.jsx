import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Itempic from "../Assets/Itempic.png";
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

const Box = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.25vw;

    height: 10vw;
    width: 60vw;

    background: #D9D9D9;

    border: 1px solid #5A5A5A;
`

const Item = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1.875vw;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
`

const CostDescript = styled.div`
    display: flex;
    flex-direction: column;
`

const HeadingText = styled.div`
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    color: black;
`

const NormalText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: black;
`

const Counter=styled.div`
    /* grid-template-columns: 3.33vw 3.33vw 3.33vw;
    position: absolute;
    display: grid;
    left: 10vw;
    top:6vw;
    width: 10vw;
    height: 2vw;
    background-color: white; */
    display: flex;

`

const ItemCard = (props) => {

    var text = "Add to Cart";

    const [counter,setcounter] = useState(0);

    const increase = () => {
        setcounter(counter+1);
        props.handleIncrement(props.idx)
    }

    const decrease = () => {
        setcounter(counter-1);
        props.handleDecrement(props.idx);
    }

  return (
    <Box>
        <Item>
            <img src={Itempic} alt="" style={{width: "8vw"}}/>
            <Description>
                <HeadingText>
                    {props.itemname}
                </HeadingText>
                <NormalText>
                    {props.shopname}
                </NormalText>
                <NormalText>
                    {props.preptime?props.preptime:"20mins"}
                </NormalText>
                <br></br>
                {/* <button style={{borderRadius: "0.52vw",backgroundColor: "none",padding: "0.3vw 0.5vw"}} onClick={()=>{text="Added"}} >
                    {text}
                </button> */}
                <Counter>
                    <button disabled={counter<1} onClick={()=> decrease()}>-</button>
                    <button >{counter}</button>
                    <button onClick={() => increase()}>+</button>
                </Counter>
            </Description>
        </Item>
        <CostDescript>
            <HeadingText>
                {props.cost}
            </HeadingText>
            <NormalText style={(props.availability=="Unavailable")?{color: "red"}:{color: "black"}} >
                {props.availability}
            </NormalText>
            {/* <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            /> */}
        </CostDescript>
    </Box>
  )
}

export default ItemCard;