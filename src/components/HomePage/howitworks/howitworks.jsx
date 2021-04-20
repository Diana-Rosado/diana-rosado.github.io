import React from "react";
import { makeStyles } from "@material-ui/core";
import howitworksStyleSheet from "./howitworksStyles.js";
import RoadMap from "../../Icons/RoadMap.png";
import Modules from "../../Icons/Modules.png";
import Wave from "../../Icons/WaveUp.png";
import WaveD from "../../Icons/WaveDown.png";
import heart from "../../Icons/heart.png";
const useStyles = makeStyles(howitworksStyleSheet);

function HowItWorks() {
  const classes = useStyles();

  return (
    <div className={classes.table}>
      <section className={classes.block1}>
        <section className={classes.image}>
          <img className={classes.RoadMap} src={RoadMap} alt={"RoadMap"}></img>
        </section>
        <section className={classes.text1}>
          <h1 className={classes.title}>
            An educational platform with a personalized road map
          </h1>
          <div className={classes.info}>
            Through a series of questions and interactions, Imagication will
            curate a road map specially made for you!
          </div>
        </section>
      </section>
      <img className={classes.Wave} src={Wave} alt={"Wave"}></img>

      {/* Section 2 */}
      <section className={classes.block2}>
        <section className={classes.text1}>
          <h1 className={classes.title}>
            Plan for college through relevant modules
          </h1>
          <div className={classes.info}>
            There are many steps to the college planning process which is why we
            want to break it down into manageable chunks (e.g. Financial
            Planning, Major Tests, Post Application, and more )
          </div>
        </section>
        <section className={classes.image}>
          <img className={classes.Modules} src={Modules} alt={"Modules"}></img>
        </section>
      </section>
      <img className={classes.Wave} src={WaveD} alt={"WaveDown"}></img>

      {/* Section 3 */}
      <section className={classes.block1}>
        <section className={classes.image}>
          <img className={classes.RoadMap} src={heart} alt={"heart"}></img>
        </section>
        <section className={classes.text1}>
          <h1 className={classes.title}>Free & Accessible</h1>
          <div className={classes.info}>
            There are over <strong>11 million students</strong> in a public high
            school in the U.S. Getting a private counselor is too much money
            which is why we’re making it <strong>free</strong>.
          </div>
        </section>
      </section>
    </div>
  );
}

export default HowItWorks;
