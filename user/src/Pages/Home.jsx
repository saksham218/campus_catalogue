import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar1 from "../Components/Navbar/Navbar";
import LocationStatusCard from "../Components/Locationcard/LocationStatusCard";
import Cards from "../Components/cards/Cards";
import Filterbox from "../Components/Filterbox/Filterbox";
import {motion,spring} from "framer-motion"

import MainPage from "../Assets/MainPage.png";
import { useSearchParams } from "react-router-dom";
import { getAllShops, getFavShops } from "../apis/api";


const Page = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 170vh; */
  padding-bottom: 5vw;

  gap: 3vw;

  background-color: #c8c8c8;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 2vw; */

  justify-content: space-around;
`;

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 2vw; */
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2vw;
  row-gap: 2vw;
`;

const Image = styled(motion.div)`
  width: 30vw;
`;

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const token = searchParams.get("token");
  if (token) {
    localStorage.setItem("user_token", token);
  }

  const [all_shops, setAllShops] = useState([]);
  const [fav_shops, setFavShops] = useState([]);

  useEffect(() => {
    getAllShops().then((res) => {
      setAllShops(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
    getFavShops().then((res) => {
      setFavShops(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [])


  return (
    <Page>
      <Navbar1 />
      <MainContents>
        <LocationStatusCard
          number="4"
          adress="Main gate, Disang Hostel, IIT Guwahati"
        />
        <Container>
          <Filterbox status="Open Now" type="Stationery" service="Service" />

          {all_shops ?
            all_shops.map((element,index)=>
            <Link to={element.basic_info.category=="Stationary"?`/ShopCatalogue/${element._id}`:`/shopMenu/${element._id}`} style={{textDecoration: "none"}} >
            <Cards 
              {...element.basic_info}
            />
            </Link>
          )
          :<></>
          }
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            landmark="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            landmark="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            landmark="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            landmark="Central Library"
          />

        </Container>
        {/* <Image whileHover={{scale:1.01}} transition={{type:spring}}>
          <img src={MainPage} alt="" />
        </Image> */}
      </MainContents>
    </Page>
  );
};

export default Home;