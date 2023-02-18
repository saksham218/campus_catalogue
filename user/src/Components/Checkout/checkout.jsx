import styled from "styled-components";

const Container_1 = styled.div`
width: 17.2vw;
height: 42.4vw;
background-color: #D9D9D9;
scale: 1.4;
margin-top: 14.5vw;
margin-left: 10.5vw;
`

const Title = styled.div`
font-size: 1.2vw;
font-family: sans-serif;
font-weight: bold;
color: black;
position: absolute;
top: 1vw;
left: 1vw;

`
const Price = styled.div`
font-size: 1vw;
font-family: sans-serif;
font-weight: bold;
color: black;
position: absolute;
top: 1vw;
left: 14vw;
`

const Subtitle = styled.div`
font-size: 0.9vw;
font-family: sans-serif;
font-weight: bold;
color: black;
position: absolute;
top: 2.5vw;
left: 1.3vw;
opacity: 0.5;

`

const Button = styled.button`
height: 2vw;
width: 10vw;
background-color: #484848;
position: absolute;
top: 5vw;
left: 4vw;
color: white;
border: none;
text-align: center;
border-radius: 0.7vw;
font-size: 1vw;
`

const ItemList = styled.div`
height: 10vw;
list-style-type: none;  
margin: 0;
padding: 0;
overflow: hidden;
position: absolute;
top: 9vw;
 left:1.5vw;
 `


const Item = styled.div`
font-size: 1vw;
line-height: 2vw;
`

const PriceList = styled.div`
height: 10vw;
list-style-type: none;  
margin: 0vw;
overflow: hidden;
position: absolute;
left: 13vw;
top: 9vw;
line-height: 2vw;
`
const Cost = styled.div`
font-size: 1vw;
`

const Checkout = (props) => {
    return (
        <Container_1>
            <Title>
                {props.Subtotal ? props.Subtotal : "Subtotal"}

            </Title>
            <Price>
                {props.Price ? props.Price : "$0.00"}
            </Price>
            <Subtitle>
                {props.Subtitle ? props.Subtitle : "(3 items)"}
            </Subtitle>
            <Button>
                {props.Button ? props.Button : "Proceed to Pay"}
            </Button>
            <ItemList>

                <Item>
                    {props.Item ? props.Item : "Item1"}
                </Item>

                <Item>
                    {props.Item ? props.Item : "Item2"}
                </Item>

                <Item>
                    {props.Item ? props.Item : "Item3"}
                </Item>
            </ItemList>
            <PriceList>
                <Cost>
                    {props.Cost ? props.Cost : "$ 0.00"}
                </Cost>
                <Cost>
                    {props.Cost ? props.Cost : "$ 0.00"}
                </Cost>
                <Cost>
                    {props.Cost ? props.Cost : "$ 0.00"}
                </Cost>
            </PriceList>


        </Container_1>
        );
}

export default Checkout;