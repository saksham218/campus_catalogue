import styled from "styled-components";
import cart from '../../assets/shop.jpg';
import remove from '../../assets/Path.png'
import {getCartItems} from '../../apis/api';
import { useEffect, useState } from "react";

const Container = styled.div`
background-color: grey;
height: 42.3vw;
width: 41.5vw;
scale: 1.3;
`
const Title = styled.div`
height: 5vw;
background-color: #FFFFFF;
position: relative;
`
const Heading = styled.strong`
font-size:3vw;
position: absolute;
top: 1vw;
left: 1vw;
font-family: sans-serif;
`

const List =styled.div`
    height:10vw;
    position: relative;
    background-color: #D9D9D9;
`
const Item=styled.img`
    height: 6vw;
    width: 6vw;
    position: absolute;
    background-color: #FFFFFF;
    top: 1.5vw;
    left: 2vw;
`
const Item_name=styled.strong`
    font-size: 1.2vw;
    position: absolute;
    left: 10vw;
    top: 1.5vw;
`
const Shop_name=styled.strong`
    font-size: 1.2vw;
    position: absolute;
    left: 10vw;
    top: 3vw;
    opacity: 0.5;
`
const Price=styled.strong`
    font-size: 1.2vw;
    position: absolute;
    left: 37vw;
    top: 3vw;
    opacity: 0.5;
`

const Counter=styled.div`
    grid-template-columns: 3.33vw 3.33vw 3.33vw;
    position: absolute;
    display: grid;
    left: 10vw;
    top:6vw;
    width: 10vw;
    height: 2vw;
    background-color: white;

`
const Count =styled.div`
    text-align: center;
`

const Delete=styled.button`
    height: 1.7vw;
    width: 1.7vw;
    background-color: white;
    position: absolute;
    top: 6.3vw;
    left: 22vw;
`
const Delete_btn=styled.img`
    width: 1vw;
    height: 1vw;
    position: absolute;
    top: 0.4vw;
    left:0.4vw;
`
const shopping_cart = (props) => {

    const [counter,setcounter] = useState(1);

    return (
        <Container>
            <Title>
                <Heading>
                    {props.title?props.title : "Shopping cart"}
                </Heading>
            </Title>
            <List>
                <Item src={cart}/>
                <Item_name>{props.Item_name?props.Item_name:"Order 1"}</Item_name>
                <Shop_name>{props.Shop_name?props.Shop_name:"Shop name"}</Shop_name>
                <Price>{props.price?props.price:"$ 25"}</Price>
                {/* <Counter>
                    <button disabled={counter<2} onClick={()=>setcounter(counter-1)}>-</button>
                    <button >{counter}</button>
                    <button onClick={()=>setcounter(counter+1)}>+</button>
                </Counter>
                <Delete onClick={()=> setcounter(0)} >
                    <Delete_btn src={remove}/>
                </Delete> */}
            </List>
        </Container>
    );
}
 
export default shopping_cart;
