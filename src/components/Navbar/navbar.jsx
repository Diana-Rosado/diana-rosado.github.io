import React from "react";
import { makeStyles } from "@material-ui/core";
import navbarStyleSheet from "./navbarStyles.js";
import hamburger from "./hamburger.svg";

const useStyles = makeStyles(navbarStyleSheet);

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <a href="#home" className={classes.home}>
        Imagication
      </a>
      
      <ul className={classes.topics}>
        <li>
          <a className= {classes.link}href="#mission">Our Mission</a>
        </li>
        <li>
          <a className= {classes.link} href="#about">What we do</a>
        </li>
        <li>
          <a className= {classes.link} href="#contact">Contact Us</a>
        </li>
        <li>
          <a className= {classes.link} href="#donate">Donate</a>
        </li>


        
        <div className = {classes.dropnavbar}>
        <button className = {classes.bar}>
        <img src={hamburger} alt={""}></img>
        </button>
        <div className = {classes.dropdownContent}>
          <a>Mission</a>
          <a>How it works</a>
          <a>Contact Us</a>
          <a>Donate</a>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
