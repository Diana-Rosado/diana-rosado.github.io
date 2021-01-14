import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import formStyles from "./formStyles.js";
import { Link } from "react-router-dom";
import bird from "./bird.svg";
import { Button } from "@material-ui/core";
import { UserContext } from "../../currentData.jsx";

const useStyles = makeStyles(formStyles);

function Form() {
  const user = useContext(UserContext);
  const classes = useStyles();

  const [isVisible, setVisibility] = useState(false);
  const onClick = (grade) => {
    setVisibility(true);
    user.setGrade(grade);
  };

  const NextPage = () => (
    <div className={classes.nextCtn}>
      <Button
        component={Link}
        to="/interests"
        exact
        className={classes.nextBtn}
      >
        Next
      </Button>
    </div>
  );
  return (
    <div>
      <nav className={classes.link}>
        <Button className={classes.btnLink} component={Link} to="/" exact>
          Imagication
        </Button>
      </nav>
      <main className={classes.body}>
        <figure className={classes.container}>
          <img src={bird} alt={"Phoenix Logo"} className={classes.img} />
          <p className={classes.greet}>
            Welcome to Imagication! Let's get to know you.
          </p>
        </figure>
        {/* Form below */}
        <div className={classes.ctn1}>
          <p>What grade are you in?</p>
          <form className={classes.form} data-toggle="buttons">
            <label className={classes.btn}>
              <input
                type="radio"
                name="options"
                id="option1"
                onClick={() => onClick("9th Grade")}
              />{" "}
              <span>9th grade</span>
            </label>
            <label className={classes.btn}>
              <input
                type="radio"
                name="options"
                id="option2"
                onClick={() => onClick("10th Grade")}
              />{" "}
              <span>10th grade</span>
            </label>
            <label className={classes.btn}>
              <input
                type="radio"
                name="options"
                id="option3"
                onClick={() => onClick("11th Grade")}
              />{" "}
              <span>11th grade</span>
            </label>
            <label className={classes.btn}>
              <input
                type="radio"
                name="options"
                id="option4"
                onClick={() => onClick("12th Grade")}
              />{" "}
              <span>12th grade</span>
            </label>
            {isVisible ? <NextPage /> : null}
          </form>
        </div>
      </main>
    </div>
  );
}

export default Form;
