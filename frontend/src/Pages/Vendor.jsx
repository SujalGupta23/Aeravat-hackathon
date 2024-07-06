import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import axios from 'axios'
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



function Vendor() {
  const [eventName, setEventName] = useState("");
  const [numPlayers, setNumPlayers] = useState(0);
  const [expAudience, setExpAudience] = useState(0);
  const [groundAddress, setgroundAddress] = useState("");
  const [contact, setcontact] = useState(null);
  const [image, setimage] = useState(null);

  const [weatherData, setWeatherData] = useState(null);
useEffect(() => {
    const city = "Mumbai"
    axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`)
    .then((response) => {
        setWeatherData(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);
const getdata = () => {
    let j = 0
    console.log(selectedDate.format("YYYY-MM-DD")+" 12:00:00")
    while (((weatherData.list[j].dt_txt) != (selectedDate.format("YYYY-MM-DD")+" 12:00:00"))) {
        j++;
    }
    const weatherdata = weatherData.list[j]
    const weatherIcon = weatherdata.weather[0].icon
    // const weatherIcon = require(`../images/${weatherdata.weather[0].icon}.png`);
   return [weatherdata,weatherIcon]
}

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (title) => {
    setSelectedCards(prevSelected => {
      if (prevSelected.includes(title)) {
        // If the card is already selected, remove it from the selected cards
        return prevSelected.filter(card => card !== title);
      } else {
        // If the card is not selected, add it to the selected cards
        return [...prevSelected, title];
      }
    });
  };

  console.log(selectedCards)

  const handleNumPlayersChange = (event) => {
    setNumPlayers(event.target.value);
  };
  const handleExpAudienceChange = (event) => {
    setExpAudience(event.target.value);
  };
  const handlegroundAddressChange = (event) => {
    setgroundAddress(event.target.value);
  };
  const handlecontactChange = (event) => {
    setcontact(event.target.value);
  };
  const handleimageChange = (event) => {
    setimage(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <>
      <Navbar />
      <div className="bg-primary grid place-self-center mt-24">
        <div className="bg-white p-8 rounded-lg shadow-md mx-10 mt-10 mb-5">
          <div className="grid grid-cols-2 gap-12 place-items-center">
            <div>
              <p className="text-black m-5 grid place-content-center text-lg mb-7 font-medium">
                Select sport
              </p>
              <div className="grid grid-cols-3 gap-4 text-[#19193c] mx-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Cricket"
                    onClick={() => handleCardClick("Cricket")}
                    highlighted={selectedCards && selectedCards.includes("Cricket")}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Football"
                    onClick={() => handleCardClick("Football")}
                    highlighted={selectedCards && selectedCards.includes("Football")}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Basketball"
                    onClick={() => handleCardClick("Basketball")}
                    highlighted={selectedCards && selectedCards.includes("Basketball")}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Volleyball"
                    onClick={() => handleCardClick("Volleyball")}
                    highlighted={selectedCards && selectedCards.includes("Volleyball")}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Hockey"
                    onClick={() => handleCardClick("Hockey")}
                    highlighted={selectedCards && selectedCards.includes("Hockey")}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card
                    title="Badminton"
                    onClick={() => handleCardClick("Badminton")}
                    highlighted={selectedCards && selectedCards.includes("Badminton")}
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
                    Ground Name
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
                      Timings 
                    </label>
                    <input
                      type="time"
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
                      Ground Capacity
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
                <div>
                  <label
                    htmlFor="eventName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Ground Address
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    className="w-full border rounded-md p-2"
                    value={groundAddress}
                    onChange={handlegroundAddressChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="numPlayers"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Contact
                    </label>
                    <input
                      type="number"
                      id="numPlayers"
                      className="w-full border rounded-md p-2"
                      value={contact}
                      onChange={handlecontactChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="numPlayers"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="expAudience"
                      className="w-full border rounded-md p-2"
                      value={image}
                      onChange={handleimageChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> 
        </div>
    </>
  );
}

export default Vendor;
