import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import homeStyleSheet from "./homeStyles.js";
import art from "../../Icons/art.jpg";

const useStyles = makeStyles(homeStyleSheet);

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <section className={classes.header}>
        <h3 className={classes.title}>
          Imagication
        </h3>
      </section>
      <section className={classes.art}>
        <div className={classes.img}>
          <img
            className={classes.background}
            src={art}
            alt={"background"}
          >
          </img>
        </div>
      </section>
      <section className={classes.mission}>
        <section className={classes.missionBody}>
          <h1 className={classes.missionTitle}>
            The Guidance Counselor That <b style={{ color: '#764BF7' }}>Everyone</b> Deserves
        </h1>
          <div className={classes.missionInfo}>
            Planning for what to do after high school is never easy. Let's figure it out together!
        </div>
        </section>
      </section>
      <section className={classes.btn}>
        <div className={classes.btnLocation}>
          <Button className={classes.btnCTA}>
            Get Started
        </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
