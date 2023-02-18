import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const Page = styled.div`
  background-color: #c8c8c8;
  padding: 1.04vw 6.4vw;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  padding: 2vw;
  border-radius: 1.6vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80vw;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #000000;
  font-family: "Inter", sans-serif;
  font-style: normal;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #000000;
  font-family: "Inter", sans-serif;
  font-style: normal;
`;

const Input = styled.input`
  /* width: 100%; */
  height: 4.8vw;
  border: 1px solid #c8c8c8;
  border-radius: 0.8vw;
  padding: 0.8vw 1.6vw;
  font-size: 1.6vw;
  font-weight: 400;
  color: #000000;
  font-family: "Inter", sans-serif;
  font-style: normal;
  width: 50vw;
`;

const Button = styled.button`
  width: fit-content;
  height: 4.8vw;
  border: none;
  border-radius: 1.8vw;
  background-color: white;
  padding: 0.8vw 1.6vw;
  font-size: 1.6vw;
  font-weight: 500;
  color: #000000;
  font-family: "Inter", sans-serif;
  border: 1px solid #000000;
`;

const ShopDetails2 = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const [day1, setday1] = useState(false);
  const [day2, setday2] = useState(false);
  const [day3, setday3] = useState(false);
  const [day4, setday4] = useState(false);
  const [day5, setday5] = useState(false);
  const [day6, setday6] = useState(false);
  const [day7, setday7] = useState(false);

  return (
      <Container>
        <Title>Add Shop Details</Title>
        <Items>
          <Subtitle>Select your working hours</Subtitle>
          <div style={{ display: "flex", gap: "1.4vw",alignItems: "center" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Start Time"
                value={value1}
                onChange={(newValue) => {
                  setValue1(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            -----
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="End Time"
                value={value2}
                onChange={(newValue) => {
                  setValue2(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </Items>
        <Items>
          <Subtitle>Select your working days</Subtitle>
          <div style={{ display: "flex", gap: "0.8vw" }}>
            <Button
              onClick={() => setday1(!day1)}
              style={
                day1
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              MON
            </Button>
            <Button
              onClick={() => setday2(!day2)}
              style={
                day2
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              TUE
            </Button>
            <Button
              onClick={() => setday3(!day3)}
              style={
                day3
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              WED
            </Button>
            <Button
              onClick={() => setday4(!day4)}
              style={
                day4
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              THU
            </Button>
            <Button
              onClick={() => setday5(!day5)}
              style={
                day5
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              FRI
            </Button>
            <Button
              onClick={() => setday6(!day6)}
              style={
                day6
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              SAT
            </Button>
            <Button
              onClick={() => setday7(!day7)}
              style={
                day7
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              SUN
            </Button>
          </div>
        </Items>
        <Items>
          <Subtitle>List Services</Subtitle>
          <Input placeholder="Enter Services Name (seperated with comma)" />
        </Items>
        <Items>
          <Subtitle>Upload Shop Images</Subtitle>
          <Input type="file" />
        </Items>
        <button
          style={{backgroundColor: "#9B9B9B",border: "none", borderRadius: "0.5vw", padding: "0.5vw  3vw"}}
        >
          <h2>SAVE</h2>
        </button>
      </Container>
  );
};

export default ShopDetails2;
