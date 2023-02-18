import Shop_available from "../Components/shop_availability/shop_available";
import List_screen from "../Components/List-view/List_screen";
import Navbar1 from "../Components/Navbar";
import styled from "styled-components";

const Pages = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    `

const Shop_Order = () => {

    return (

        <Pages>
            <Navbar1 />
            <Shop_available />
            <List_screen />
        </Pages>

    );
}

export default Shop_Order;