import React from "react";
import { makeStyles } from "@material-ui/core";
import bird from "./bird.svg";
import vector1 from "./Vector 1.svg";
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core';
import homeStyleSheet from "./homeStyles.js";

const useStyles = makeStyles(homeStyleSheet);

function Home() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.home}>
        <div className={classes.intro}>
          <div>
            <h1>Imagication</h1>
            <p>Enhancing your educational journey.</p>
            <Button className = {classes.buttonStyle} component={Link} to ="/Form" >Get Started Now</Button>
          </div>
        </div>
        <div className={classes.homeImage}>
          <div>
            <img src={bird} alt={""}></img>
          </div>
        </div>
      </div>
      <div className={classes.vector1}>
        <img src={vector1} alt={""}></img>
      </div>
    </div>
  );
}

export default Home;
