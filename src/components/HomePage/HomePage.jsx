import React from "react";
import Navbar from "../Navbar/navbar.jsx";
import Home from "./home/home.jsx";
import Mission from "./mission/mission.jsx";
import HowItWorks from "./howitworks/howitworks.jsx";
import Contact from "./contact/contact.jsx";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Mission />
      <HowItWorks />
      <Contact />
    </div>
  );
}

export default HomePage;
