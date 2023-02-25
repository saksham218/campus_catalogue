import Navbar1 from "../Components/Navbar/Navbar";
import { Searchbar1 } from "../Components/Searchbar";
import styled from "styled-components";
import Review from "../Components/Review/Review";

const Pages = styled.div`
    display: flex;
    flex-direction: column;
    `

const Reveiew_page = () => {
    return (
        <Pages>
            <Navbar1 />
            <Searchbar1 />
            <Review/>
        </Pages>


    );
}

export default Reveiew_page;