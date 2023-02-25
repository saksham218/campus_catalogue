import Shop_available from "../Components/shop_availability/shop_available";
import List_screen from "../Components/List-view/List_screen";
import Navbar1 from "../Components/Navbar";
import styled from "styled-components";

const Pages = styled.div`
    display: flex;
    flex-direction: column;
    `

const Shop_Order = (props) => {

    return (

        <Pages>
            <Navbar1 shop={props.shop}/>
            <Shop_available shop={props.shop}/>
            <List_screen shop={props.shop}/>
        </Pages>

    );
}

export default Shop_Order;