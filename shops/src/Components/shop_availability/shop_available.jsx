import styled from "styled-components";
import ToggleSwitch from "../ToggleSwitch/Toggle_switch";
import shop from '../../Assets/shop.jpg';

const Container = styled.div`
    width: 59.7vw;
    height: 10vw;
    background-color:#D9D9D9 ;
    display: flex;
    flex-direction: column;
    margin-left: 19.4vw;
    margin-top: 3vw;
    align-items: flex-start;
    justify-content: center;
    position: relative;
`;

const Profile = styled.img`
    width: 7.5vw;
    height: 7.5vw;
    margin-left: 2vw;
    `
const Name = styled.strong`
    font-size:1.4vw;
    position: absolute;
    left: 11vw;
    top: 1vw;
    font-style: normal;

    `
const Category = styled.strong`
    font-size:1.4vw;
    position: absolute;
    left: 11vw;
    top: 3vw;
    font-style: normal;
    `

const Contact = styled.strong`
    font-size:1.4vw;
    position: absolute;
    left: 11vw;
    top: 5vw;
    font-style: normal;
    `
const Location = styled.strong`
    font-size:1.4vw;
    position: absolute;
    left: 11vw;
    top: 7vw;
    font-style: normal;
    `

const Toggle = styled.div`
    position: absolute;
    left: 52vw;
    top: 1vw;
    `


const Shop_available = (props) => {
    return (<Container>
        <Profile src={shop}/>
        <Name>
            {props.name ? props.name : "Shop Name"}
        </Name>
        <Category>
            {props.category ? props.category : "Category"}
        </Category>
        <Contact>
            {props.contact ? props.contact : "Contact Number"}
        </Contact>
        <Location>
            {props.location ? props.location : "Location"}
        </Location>
        <Toggle>
            <ToggleSwitch label="open" />
        </Toggle>

    </Container>);

}

export default Shop_available;