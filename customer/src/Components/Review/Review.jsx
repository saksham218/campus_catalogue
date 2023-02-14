import styled from "styled-components";
import shop from '../../assets/shop.jpg';
import { BsFillGeoAltFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";


const Container = styled.div`
display: grid;
grid-template-columns: 40vw 20vw;
width: 64.85vw;
height: 50.3vw;
background-color: #D9D9D9;
scale: 1.2;
`

const Image = styled.img`
background-color: green;
height: 20.7vw;
width: 23.1vw;
margin-left: 5vw;
margin-top:5vw;
`

const Heading_1 = styled.strong`
font-size: 1.2vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 5vw;
left: 37vw;
opacity: 0.9;
`

const SubHead_1 = styled.strong`
font-size: 1vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 6.9vw;
left: 37vw;
opacity: 0.5;
`

const Heading_2 = styled.strong`
font-size: 1.2vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 10.5vw;
left: 37vw;
opacity: 0.9;
`
const SubHead_2 = styled.strong`
font-size: 1vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 12.4vw;
left: 37vw;
opacity: 0.5;
`

const SubHead_3 = styled.strong`
font-size: 1vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 18.3vw;
left: 37vw;
opacity: 0.5;
`
const Open = styled.button`
height: 2.5vw;
width: 6.3vw;
border: none;
background-color: #00B140;
position: absolute;
top: 15vw;
left:37vw;
border-radius: 0.7vw;
color: white;
font-size: 1vw;
font-family: sans-serif;
font-weight: lighter;
border-radius:1.5vw ;
`
const SubHead_4 = styled.strong`
font-size: 1.3vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
top: 0.5vw;
margin-left: 2vw;
left: 4.5vw;
opacity: 0.5;
`

const Rating = styled.div`
position: absolute;
top: 20.3vw;
left: 37vw;
`

const SubHead_5 = styled.strong`
font-size: 1vw;
font-family: sans-serif;
font-weight: lighter;
position: absolute;
color: black;
top: 26vw;
margin-left: 2vw;
left: 35vw;
opacity: 0.5;
`
const Heading_3 = styled.strong`
font-size: 1.2vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 24vw;
left: 37vw;
opacity: 0.9;
`
const Review_Section = styled.div`
position: absolute;
top: 34vw;
left: 37vw;
height: 11vw;
width: 27vw;
background-color: white;
`

const Text_1 = styled.strong`
font-size: 1vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 4vw;
left: 9vw;
opacity: 0.5;
`
const Profile= styled.img`
height: 5vw;
width: 5vw;
margin-top: 3vw;
margin-left: 2vw;
`


const Button = styled.button`
height: 2.867vw;
width: 23.1vw;
border: none;
background-color: white;
position: absolute;
top: 27.5vw;
left:5vw;
border-radius: 0.7vw;
`
const Heading_4 = styled.strong`
font-size: 1.3vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 31vw;
left: 37vw;
opacity: 0.9;
`
const Heading_5 = styled.strong`
font-size: 1.3vw;
font-family: sans-serif;
font-weight: lighter;
color: black;
position: absolute;
top: 2vw;
left:9vw;
opacity: 0.9;
`

const Review = (props) => {

    return (
        <Container>
            <Image src={shop} />
            <Button>
                <BsFillGeoAltFill />
                <SubHead_4>{props.SubHead_3 ? props.SubHead_3 : "Pin this shop"}</SubHead_4>

            </Button>

            <Heading_1>{props.Heading_1 ? props.Heading_1 : "IITG cycle store"}</Heading_1>
            <SubHead_1>{props.SubHead_1 ? props.SubHead_1 : "cycle repair shop"}</SubHead_1>
            <Heading_2>{props.Heading_2 ? props.Heading_2 : "210106078"}</Heading_2>
            <SubHead_2>{props.SubHead_2 ? props.SubHead_2 : "core-1 Building near Lecture Hall"}</SubHead_2>
            <Open>{props.Open ? props.Open : "open now"}</Open>
            <SubHead_3>{props.SubHead_3 ? props.SubHead_3 : "550 m away from Disang Hostel"}</SubHead_3>
            <Rating>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="black"
                />
            </Rating>

            <Heading_3>{props.Heading_3 ? props.Heading_3 : "Services:"}</Heading_3>
            <SubHead_5>{props.SubHead_5 ? props.SubHead_5 : "Oiling, air pump, new cycles, break change, puncture, new bell.."}</SubHead_5>
            <Heading_4>{props.Heading_4 ? props.Heading_4 : "Customer Reviews:"}</Heading_4>
            <Review_Section>
                <Profile src={shop} />
                <Heading_5>{props.Heading_5 ? props.Heading_5 : "Customer Name"}</Heading_5>

                <Text_1>
                    {props.Text ? props.Text : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </Text_1>
                
            </Review_Section>

        </Container>
    );
}

export default Review;