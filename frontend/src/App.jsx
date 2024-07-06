import {
  About,
  Contact,
  // Experience,
  Feedbacks,
  Hero,
  Navbar,
  // Tech,
  // Works,
  StarsCanvas,
} from "./components";

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EventOrganize from "./Pages/EventOrganize";
import ParticipantView from "./Pages/ParticipantView";
import Analysis from "./Pages/Analysis";
import Vendor from "./Pages/Vendor";

import LoginPage from "./Pages/LoginPage";
import Form from "./components/Form";

const LandingPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      {/* <Experience /> */}
      {/* <Tech /> */}
      {/* <Works /> */}
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/participantview" Component={ParticipantView} />
        <Route path="/eventorganize" Component={EventOrganize} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/forms" Component={Form} />
        <Route path="/analysis" Component={Analysis} />
        {/* <Route path="/services/participant" Component={ParticipantView} /> */}
        <Route path="/vendor" Component={Vendor} />
        {/* <Route path="/services/organiser" Component={EventOrganize} /> */}
        {/* <Route path="/services/participant" Component={ParticipantView}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
