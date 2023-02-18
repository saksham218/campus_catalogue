import styled from "styled-components";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@mui/material/Typography';
import profile from '../../Assets/Shop.jpg';
import {motion,spring} from 'framer-motion';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const List_screen = (props) => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [accepted, setAccepted] = useState('Accept');
    const [completed, setCompleted] = useState('Mark as Complete');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const drop={
        hidden: { opacity: 0, scale: 0.5,y:"-50vh" },
        visible: {
            opacity: 1,
            scale: 1,
            y:"0",
            transition: {
                duration: 0.3,
                type: "spring",
                damping:25,
                stiffness:200,
            }
        }
    };


    const Tab_section = styled(motion.div)`
   left: 20vw;
    top: 10vw;
    position: absolute;
    /* scale: 1.4; */
   ` 

    const Profile = styled.img`
    width: 7vw;
   height: 7vw;  
   position: absolute;
   left: 2vw;
    top: 8vw;
   border-radius: 3.7vw;
   background-color: green;
`;
    const Contact = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 11vw;
    top: 13vw;
    font-style: normal;
    font-weight: 500;
    `
    const Location = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 11vw;
    top: 15.5vw;
    font-style: normal;
    font-weight: 500;
    `
    const Name = styled.strong`
    font-size:1.7vw;
    position: absolute;
    left: 11vw;
    top: 6vw;
    font-style: normal;
    `
    const Completed = styled.strong`
     font-size:1.7vw;
     position: absolute;
     left: 11vw;
     top: 6vw;
     font-style: normal;
     `
    const Category = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 11vw;
    top: 10.5vw;
    font-weight: 500;
    font-style: normal;
    `

    const OTP = styled.div`
    position: absolute;
    left: 11vw;
    top: 20vw;
    font-size: 1.4vw;
    `

    const Number = styled.div`
    position: absolute;
    left: 14.5vw;
    top: 20vw;
    font-size: 1.4vw;
    `

    const Mark = styled(motion.button)`
    position: absolute;
    left: 10.5vw;
    top: 25vw;
    width: 15vw;
    height: 3vw;
    background: white;
    border-radius: 0.4vw;
    /* border: none; */
    font-size: 1.2vw;
    font-weight: 500;
    font-style: normal;
    color: #000000;
    border-color:black;
    `

const Accept = styled(motion.button)`
position: absolute;
left: 10.5vw;
top: 25vw;
width: 15vw;
height: 3vw;
background: #484848;
border-radius: 0.4vw;
border: none;
font-size: 1.2vw;
font-weight: 500;
font-style: normal;
color: white;
/* :hover{
    transform: scale(1.3);
    transition: 0.6s;
} */
`

    const Cancel = styled(motion.button)`
    position: absolute;
    left: 30vw;
    top: 25vw;
    width: 7vw;
    height: 3vw;
    background:white;
    border-radius: 0.4vw;
    /* border: none; */
    font-size: 1.2vw;
    font-weight: 500;
    font-style: normal;
    color: #000000;
    border-color:black;
    `
    const Reason = styled.input`
    position: absolute;
    left: 10.5vw;
    top: 33vw;
    width: 35vw;
    height: 2.5vw;
    background: white;
    /* border: none; */
    font-size: 1.2vw;
    font-weight: 500;
    font-style: normal;
    color: #000000;
    opacity: 0.4;
    border-radius: 0.3vw;
    `

    const Order_no = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 38.5vw;
    top: 10vw;
    font-style: normal;
    font-weight: 500;
    `

    const Item_name = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 38.5vw;
    line-height: 2.5vw;
    top: 12.5vw;
    font-style: normal;
    font-weight: 500;
    `
    const Order_time = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 38.5vw;
    top: 15.5vw;
    font-style: normal;
    font-weight: 500;
    `
    const Customer_Name = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 11vw;
    top: 18vw;
    font-style: normal;
    font-weight: 500;
    `
    const CN = styled.strong`
    font-size:1.5vw;
    position: absolute;
    left: 38.5vw;
    line-height: 2.5vw;
    top: 18vw;
    font-style: normal;
    font-weight: 500;
    `
    const Contents=styled.div`
    position: relative;
    display: flexbox;
    margin-top: -6vw;
    `

    return (

        <Tab_section variants={drop} initial="hidden" animate="visible">
            <Box sx={{ bgcolor: 'background.paper', width: "59.7vw", }}>
                <AppBar position="static" variant="fullWidth" sx={{ bgcolor: "#D9D9D9" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        className="tab"
                    >
                        <Tab label="Order Request" {...a11yProps(0)} sx={{ color: "black" }} />
                        <Tab label="Accepted Orders" {...a11yProps(1)} sx={{ color: "black" }} />
                        <Tab label="Completed" {...a11yProps(2)} sx={{ color: "black" }} />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction} sx={{}}>
                    <Contents>
                        <Profile src={profile} />
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
                        <Accept onClick={()=>{setAccepted('Accepted!')}} whileHover={{scale:1.2}} whileTap={{scale:0.8}}>
                            {accepted}
                        </Accept>
                        <Cancel whileHover={{scale:1.2}} whileTap={{scale:0.8}}>
                            {props.cancel ? props.cancel : "Cancel"}
                        </Cancel>
                        <Order_no>
                            {props.order_no ? props.order_no : "Order No:"}
                        </Order_no>
                        <Item_name>
                            {props.iteam_name ? props.iteam_name : "Item Name"}
                        </Item_name>
                        <Order_time>
                            {props.order_time ? props.order_time : "Order Time"}
                        </Order_time>
                        <Reason placeholder={props.Reason ? props.Reason : "Reason to Cancellation"} />

                    </Contents>

                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} >
                <Contents>
                <Profile src={profile} />
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
                    <OTP>
                        {props.otp ? props.otp : "OTP:"}
                    </OTP>
                    <Number>
                        {props.number ? props.number : "123456"}
                    </Number>
                    <Mark whileHover={{scale:1.2}} whileTap={{scale:0.8}} onClick={()=>setCompleted('Completed!')}>
                       {completed}
                    </Mark>
                    <Cancel whileHover={{scale:1.2}} whileTap={{scale:0.8}}>
                        {props.cancel ? props.cancel : "Cancel"}
                    </Cancel>
                    <Order_no>
                        {props.order_no ? props.order_no : "Order No:"}
                    </Order_no>
                    <Item_name>
                        {props.iteam_name ? props.iteam_name : "Item Name"}
                    </Item_name>
                    <Order_time>
                        {props.order_time ? props.order_time : "Order Time"}
                    </Order_time>
                    <Reason placeholder={props.Reason ? props.Reason : "Reason to Cancellation"} />  
                </Contents>

                   
                                  </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Contents>
                    <Completed>
                        {props.name ? props.name : "Completed"}
                    </Completed>
                    <Customer_Name>
                        {props.name ? props.name : "Customer Name"}
                    </Customer_Name>
                    <CN>
                        {props.name ? props.name : "Customer Name"}
                    </CN>
                    <Category>
                        {props.category ? props.category : "Category"}
                    </Category>
                    <Contact>
                        {props.contact ? props.contact : "Contact Number"}
                    </Contact>
                    <Location>
                        {props.location ? props.location : "Location"}
                    </Location>
                    <Order_no>
                        {props.order_no ? props.order_no : "Order No:"}
                    </Order_no>
                    <Item_name>
                        {props.iteam_name ? props.iteam_name : "Item Name"}
                    </Item_name>
                    <Order_time>
                        {props.order_time ? props.order_time : "Order Time"}
                    </Order_time>
                    </Contents>
                   
                </TabPanel>
            </Box>


        </Tab_section>

    );
}

export default List_screen;
