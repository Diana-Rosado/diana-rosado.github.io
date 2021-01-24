import React, { useState } from "react";
import surveyStyles from "./surveyStyles.js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(surveyStyles);

function Survey() {
  const classes = useStyles();

  const [text, setText] = useState(
    "We hope you’re enjoying Imagication. Would you mind answering a few questions to improve Imagication?"
  );
  const [isVisible, setVisibility] = useState(true);

  function noResponse(e) {
    e.preventDefault();
    setVisibility(false);
    setText("Thank you for using Imagication. We hope you have a great day!");
  }

  function yesResponse(e) {
    e.preventDefault();
    setVisibility(false);
    setText("Thank you for your time for filling out the survey.");
    window.open("https://www.surveymonkey.com/r/LHDNCKR", "_blank");
  }

  return (
    <div>
      <section>
        <figcaption className={classes.text}>{text}</figcaption>

        {isVisible ? (
          <form className={classes.options}>
            <button className={classes.answer} onClick={yesResponse}>
              Yes
            </button>
            <button className={classes.answer} onClick={noResponse}>
              No
            </button>
          </form>
        ) : null}
      </section>
    </div>
  );
}

export default Survey;
