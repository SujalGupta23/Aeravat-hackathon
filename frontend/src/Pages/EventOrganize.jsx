import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import axios from "axios";
// import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import FindGrounds from "../components/FindGrounds";
import { Navbar } from "../components";

// Define Card component separately
const Card = ({ title, onClick, highlighted }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 cursor-pointer ${
        highlighted ? "border-2 bg-[#0c0c1d] text-white" : ""
      }`}
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

function EventOrganize() {
  const [eventName, setEventName] = useState("");
  const [numPlayers, setNumPlayers] = useState(0);
  const [expAudience, setExpAudience] = useState(0);

  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const city = "Mumbai";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getdata = () => {
    let j = 0;
    console.log(selectedDate.format("YYYY-MM-DD") + " 12:00:00");
    while (
      weatherData.list[j].dt_txt !=
      selectedDate.format("YYYY-MM-DD") + " 12:00:00"
    ) {
      j++;
    }
    const weatherdata = weatherData.list[j];
    const weatherIcon = weatherdata.weather[0].icon;
    // const weatherIcon = require(`../images/${weatherdata.weather[0].icon}.png`);
    return [weatherdata, weatherIcon];
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (title) => {
    setSelectedCard(title === selectedCard ? null : title);
  };

  const handleNumPlayersChange = (event) => {
    setNumPlayers(event.target.value);
  };

  const handleExpAudienceChange = (event) => {
    setExpAudience(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDays, setEventDays] = useState(0);
  const [eventSports, setNumSports] = useState(0);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleEventDaysChange = (newDays) => {
    setEventDays(newDays);
  };

  const handleNumSportsChange = (newSports) => {
    setNumSports(newSports);
  };

  const [scheduleMade, setSchedule] = useState([]);

  const submittoModel = async (event) => {
    //var data = {"days":eventDays,"NumSports":eventSports}
    var data = { days: 2, NumSports: 2 };
    const response = await fetch("http://127.0.0.1:5001/optimize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setSchedule(result);
      });
    // navigate('/edit');
  };

  return (
    <>
      <Navbar />
      <div className="bg-primary">
        <div className="bg-white p-8 rounded-lg shadow-md mx-10 mt-10 mb-5">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-black m-5 pt-3 grid place-content-center text-lg mb-7 font-medium">
                Select your sport
              </p>
              <div className="grid grid-cols-3 gap-4 text-[#19193c] mx-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Cricket"
                    onClick={() => handleCardClick("Cricket")}
                    highlighted={selectedCard === "Cricket"}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Football"
                    onClick={() => handleCardClick("Football")}
                    highlighted={selectedCard === "Football"}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Basketball"
                    onClick={() => handleCardClick("Basketball")}
                    highlighted={selectedCard === "Basketball"}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Volleyball"
                    onClick={() => handleCardClick("Volleyball")}
                    highlighted={selectedCard === "Volleyball"}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Hockey"
                    onClick={() => handleCardClick("Hockey")}
                    highlighted={selectedCard === "Hockey"}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Badminton"
                    onClick={() => handleCardClick("Badminton")}
                    highlighted={selectedCard === "Badminton"}
                  />
                </motion.div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Event Details</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="eventName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    className="w-full border rounded-md p-2"
                    value={eventName}
                    onChange={handleEventNameChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="numPlayers"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Number of Teams
                    </label>
                    <input
                      type="number"
                      id="numPlayers"
                      className="w-full border rounded-md p-2"
                      value={numPlayers}
                      onChange={handleNumPlayersChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="numPlayers"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Expected Number of Audience
                    </label>
                    <input
                      type="number"
                      id="expAudience"
                      className="w-full border rounded-md p-2"
                      value={expAudience}
                      onChange={handleExpAudienceChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md my-5 mx-10 flex-wrap">
          <FindGrounds />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md mx-10">
          <div className="grid grid-cols-2 gap-12">
            <div className="mb-8 grid place-items-center border">
              <h2 className="text-xl font-medium mb-2 text-black">
                Select Date of Event
              </h2>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  className="text-black"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                <p className="text-black">
                  Selected Date:{" "}
                  {selectedDate ? selectedDate.format("YYYY-MM-DD") : "None"}
                </p>
              </LocalizationProvider>
            </div>
            {selectedDate && weatherData && (
              <div className="grid place-items-center">
                {console.log(getdata()[1])}
                <img
                  src={`https://openweathermap.org/img/wn/${getdata()[1]}.png`}
                  alt="Weather Icon"
                  className="h-24 col-span-1"
                />
                <p className="text-xl text-black">
                  {getdata()[0].weather[0].description}
                </p>
                <p className="text-xl text-black">
                  {Math.round(getdata()[0].main.temp - 273.15)}°C
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md mx-10">
          <div className="grid grid-cols-2 gap-12">
            <div className="mb-8 grid place-items-center border">
              <label
                htmlFor="eventDays"
                className="block text-gray-700 font-semibold mb-2"
              >
                Number of Event Days
              </label>
              <input
                type="number"
                id="eventDays"
                className="w-full border rounded-md p-2"
                value="2" //{eventDays}
                onChange={handleEventDaysChange}
              />
              <label
                htmlFor="eventSports"
                className="block text-gray-700 font-semibold mb-2"
              >
                Number of Event Sports
              </label>
              <input
                type="number"
                id="eventSports"
                className="w-full border rounded-md p-2"
                value="2" //{eventSports}
                onChange={handleNumSportsChange}
              />
              <button
                className="bg-teal-500 text-white py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
                onClick={submittoModel}
              >
                {" "}
                Schedule Optimize
              </button>
            </div>
            <div className="text-black">
              <h2 className="text-2xl font-bold mb-4">Schedule Made</h2>
              {Object.entries(scheduleMade).map(([day, schedule]) => (
                <div key={day} className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Day {day}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(schedule).map(([time, event]) => (
                      <div key={time}>
                        <h4 className="text-lg font-medium mb-2">{time}</h4>
                        <p>
                          <strong>Sport:</strong> {event.Sport}
                        </p>
                        <p>
                          <strong>Venue:</strong> {event.Venue}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* {scheduleMade.map((item,index) => {
              <p>{item}</p>
            })} */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventOrganize;
