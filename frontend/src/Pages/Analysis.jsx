// import React from "react";
// import { Navbar } from "../components";
// import Batsman from "../components/canvas/Batsman";
// import { styles } from "../styles";
import React, { useState, useEffect } from "react";
// import { color, motion } from "framer-motion";
// import axios from 'axios'
// import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import FindGrounds from "../components/FindGrounds";
import { Navbar } from "../components";

function Analysis() {
  const [soccerPosition, setSoccerPosition] = useState("");
  const [soccerStrategy, setSoccerStrategy] = useState("");
  const soccerModel = async (event) => {
    //var data = {"days":eventDays,"NumSports":eventSports}
    var data = {
      position:
        "It is third down and inches. The ball is on your opponent's 5 yardline. It is the first quarter. You are down by 3 points. Would you:",
    };
    const response = await fetch("http://127.0.0.1:5001/soccerposition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setSoccerStrategy(result);
      });
    // navigate('/edit');
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start ml-8 mt-24">
        <h1 className="text-4xl font-bold text-white mb-4">Analysis</h1>
        <h1 className="text-xl font-semibold text-white">
          ⚽ Soccer Current Position
        </h1>
        <label>Please input your current position in the game </label>
        <input value={soccerPosition}></input>
        <button
          onClick={soccerModel}
          className="bg-teal-500 text-white py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline "
        >
          Submit
        </button>
        {soccerStrategy}
      </div>
      {/* <h1 className="absolute">Hello</h1> */}
      {/* <div className="grid grid-cols-2">
        <div className="flex justify-center my-auto items-center h-fit">
        </div> 
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center text-white mb-4 absolute left-0 top-100" style={{ zIndex: 10 }}>
            Analysis
          </h1>
          <h1 className="text-xl font-semibold text-white absolute" style={{ zIndex: 10 }}>Football Current Position</h1>
        </div>
      </div> */}
    </>
  );
}

export default Analysis;
