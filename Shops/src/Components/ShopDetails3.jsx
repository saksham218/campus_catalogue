import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Page = styled.div`
  background-color: #c8c8c8;
  padding: 1.04vw 6.4vw;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 2vw;
  border-radius: 1.6vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80vw;
  justify-content: center;
  align-items: center;
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
  width: 50vw;
  height: 4.8vw;
  border: 1px solid #c8c8c8;
  border-radius: 0.8vw;
  padding: 0.8vw 1.6vw;
  font-size: 1.6vw;
  font-weight: 400;
  color: #000000;
  font-family: "Inter", sans-serif;
  font-style: normal;
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

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  var contents = (
    <Container>
      <Items>
        <Subtitle>Item Name</Subtitle>
        <Input type="text" placeholder="Enter Item Name" />
      </Items>
      <Items>
        <Subtitle>Item Price</Subtitle>
        <Input type="text" placeholder="Enter Item Price" />
      </Items>
      <Items>
        <Subtitle>Preparation Time in min</Subtitle>
        <Input type="text" placeholder="Enter Preparation Time" />
      </Items>
      <Items>
        <Subtitle>Upload Pictures from device</Subtitle>
        <Input type="file" />
      </Items>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Available"
      />
    </Container>
  );

  return (
      <Container>
        <Title>Add Shop Details</Title>
        <Items>
          <Subtitle>Select your working hours</Subtitle>
          <div style={{ display: "flex", gap: "1.4vw" }}>
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
            -
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
        <Title>Add Items to catalogue</Title>
        <hr width="100%"></hr>
        {contents}
        <button style={{padding: "1vw 2vw", backgroundColor: "white", fontSize: "2vw", borderRadius: "1.6vw"}} >Add more items</button>
        <button style={{padding: "1vw 2vw", backgroundColor: "white", fontSize: "2vw", borderRadius: "1.6vw"}} >SAVE</button>
      </Container>
  );
};

export default ShopDetails2;
