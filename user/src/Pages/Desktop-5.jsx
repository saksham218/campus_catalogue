import Checkout from "../Components/Checkout/checkout";
import Navbar1 from "../Components/Navbar/Navbar";
import Shopping_cart from "../Components/Shopping_cart/Shopping_cart";
import { Searchbar1 } from "../Components/Searchbar";
import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #c8c8c8;
    height: 1000vw;
    `
const Cart = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 44.4vw;
    margin-top: -44vw;
    `


const Desktop_5 = () => {
    return (
        <Page>
            <Navbar1 />
            <Searchbar1 />
            <Checkout />
            <Cart>
                <Shopping_cart />
            </Cart>
        </Page>



    );
}

export default Desktop_5;