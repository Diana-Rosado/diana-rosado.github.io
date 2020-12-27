import React from "react";
import { makeStyles } from "@material-ui/core";
// import education from "./education.svg";
import bird from "./bird.svg";
import vector1 from "./Vector 1.svg";

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
            <button>Get Started Now</button>
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
