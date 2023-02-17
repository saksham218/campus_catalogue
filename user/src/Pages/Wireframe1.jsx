import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import Navbar1 from "../Components/Navbar/Navbar";
import LocationStatusCard from "../Components/Locationcard/LocationStatusCard";
import Cards from "../Components/cards/Cards";
import Filterbox from "../Components/Filterbox/Filterbox";

import MainPage from "../Assets/MainPage.png";
import { Backend_URL } from "../../../admin_panel/src/utilities/config";

project=[];

const Page = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3vw;

  background-color: #c8c8c8;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

const Image = styled.div`
  width: 670px;
`;

const Wireframe1 = () => {
  var axios = require("axios");
  var [customer_data,setCustomer_data] = useState([]);
  var [all_shops,setAll_shops] = useState([]);

  var customer_info = {
    method: "get",
    url: `${Backend_URL}/customer/basic_info`,
    headers: {},
  };

  axios(customer_info)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
        setCustomer_data(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  var all_shop = {
    method: "get",
    url: `${Backend_URL}/admin/pending-shops`,
    headers: {},
  };

  axios(all_shop)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
        setAll_shops(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

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

          {all_shops.map((element,index)=>
            <Cards {...element} key={element.token} />
          )}
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            checkpoint="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            checkpoint="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            checkpoint="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            checkpoint="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            checkpoint="Central Library"
          />
          <Cards
            name="Core 1 Stationery"
            category="Stationery Store"
            address="Core-1 building near lecture hall, IITG"
            status="Open Now"
            distance="800m"
            checkpoint="Central Library"
          />
        </Container>
        <Image>
          <img src={MainPage} alt="" />
        </Image>
      </MainContents>
    </Page>
  );
};

export default Wireframe1;