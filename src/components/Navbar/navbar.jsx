import React from "react";
import { makeStyles } from "@material-ui/core";
import navbarStyleSheet from "./navbarStyles.js";
import hamburger from "./hamburger.svg";

const useStyles = makeStyles(navbarStyleSheet);

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <a href="#home" className={classes.home}>
        Imagication
      </a>

      <ul className={classes.topics}>
        <li>
          <a href="#mission">Our Mission</a>
        </li>
        <li>
          <a href="#about">What we do</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>

        <div className={classes.dropnavbar}>
          <button className={classes.bar}>
            <img src={hamburger} alt={""}></img>
          </button>
          <div className={classes.dropdownContent}>
            <a href="#mission">Mission</a>
            <a href="#about">How it works</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
