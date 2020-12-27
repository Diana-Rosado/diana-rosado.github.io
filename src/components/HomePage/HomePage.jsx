import React from "react";
// import { makeStyles } from "@material-ui/core";
import Navbar from "../Navbar/navbar.jsx";
import Home from "./home/home.jsx";
import Mission from "./mission/mission.jsx";
import HowItWorks from "./howitworks/howitworks.jsx";
import Contact from "./contact/contact.jsx";


// import homePageStyleSheet from './homePageStyles.js';

// const useStyles = makeStyles(homePageStyleSheet);

function HomePage() {
    // const classes = useStyles();
    
    return(
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
