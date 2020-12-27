import React from "react";
import { makeStyles } from "@material-ui/core";
import phoenix_white from "./phoenix_white.png";
import magnify from "./magnify.svg";
import book from "./book.svg";
import howitworksStyleSheet from './howitworksStyles.js';

const useStyles = makeStyles(howitworksStyleSheet);

function HowItWorks() {
    const classes = useStyles();
    
    return(
            <div className={classes.mission}>
                <h1>How it Works</h1>
                <figure className = {classes.howitworks}>
                    <img src={phoenix_white} alt={"white phoenix"}></img>
                    <p>Meet Serena, our assistant who will get to know you on a personal level</p>
                </figure>
                <figure className = {classes.howitworks}>
                <img src={magnify} alt={""}></img>
                    <p>We will search high and low for the right opportunities.</p>
                </figure>
                <figure className = {classes.howitworks}>
                <img src={book} alt={""}></img>
                    <p>You will then gain access to resources that are most relevant to you.</p>
                </figure>
            </div>
    );
}

export default HowItWorks;
