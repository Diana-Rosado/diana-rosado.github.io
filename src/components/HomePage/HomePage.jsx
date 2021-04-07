import React from "react";
import Home from "./home/home.jsx";
import HowItWorks from "./howitworks/howitworks.jsx";
import Contact from "./contact/contact.jsx";
import { makeStyles } from "@material-ui/core";
import HomePageStyles from './HomePageStyles.js';

const useStyles = makeStyles(HomePageStyles);

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Home />
      <HowItWorks />
      <Contact />
    </div>
  );
}

export default HomePage;
