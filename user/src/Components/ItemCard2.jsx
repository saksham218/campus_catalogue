import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Itempic from "../Assets/Itempic.png";

const Box = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.25vw;

    height: 6vw;
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

const ItemCard = (props) => {

    var text = "Add to Cart";

  return (
    <Box>
        <Item>
            <img src={Itempic} alt="" />
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
                <button style={{borderRadius: "0.52vw",backgroundColor: "none",padding: "0.1vw 0.5vw"}} onClick={()=>{text="Added"}} >
                    {text}
                </button>
            </Description>
        </Item>
        <CostDescript>
            <HeadingText>
                {props.cost}
            </HeadingText>
            <NormalText style={(props.availability=="Unavailable")?{color: "red"}:{color: "black"}} >
                {props.availability}
            </NormalText>
        </CostDescript>
    </Box>
  )
}

export default ItemCard;