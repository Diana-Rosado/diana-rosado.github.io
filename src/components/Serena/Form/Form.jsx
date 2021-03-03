import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import formStyles from "./formStyles.js";
import { Link } from "react-router-dom";
// import bird from "./bird.svg";
import {
  Button,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
} from "@material-ui/core";
import { UserContext } from "../../currentData.jsx";

const useStyles = makeStyles(formStyles);

function Form() {
  const user = useContext(UserContext);
  const classes = useStyles();

  const [isVisible, setVisibility] = useState(false);
  const [grade, setGrade] = useState(false);

  const onClick = (grade) => {
    setGrade(false);
    setVisibility(true);
    user.setInvisible(true);
    user.setInterestsVisibility(false);
    user.setGrade(grade);
    user.setLevel(grade);
    user.setGradeVisibility(false);
  };


  const pickGrade = (grade) => {
    setVisibility(false);
    setGrade(true);
    user.setLevel(grade);
    user.setGradeVisibility(false);
  };

  const GradeBtn = () => (
    <div className={classes.next}>
      <Button
        onClick={F2G}
        className={classes.nextBtn}
      >
        Your Grade
      </Button>
    </div>
  );

  function Disappear(e) {
    user.setInvisible(false);
    user.setInterestsVisibility(true);
  }
  function F2G() {     //meaning form to grade page
    user.setInvisible(false);
    user.setGradeVisibility(true);
  }
  // Below is what is displayed
  return (
    <div >
      <article className={classes.container}>
        <figcaption className={classes.conText}>
          I am in . . .
            </figcaption>
      </article>
      <FormControl component="fieldset">
        <RadioGroup className={classes.form} row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel
            className={classes.btn}
            value="MiddleSchool"
            control={<Radio color="primary" />}
            label={<span style={{
              fontWeight: 'Bold',
              fontSize: '1.2rem',
            }}>{'Middle School'}</span>}
            onClick={() => onClick("Middle School")}
            id="middleschool"
            name='options'
          />{" "}
          <FormControlLabel
            className={classes.btn}
            value="Highschool"
            control={<Radio color="primary" />}
            label={<span style={{
              fontWeight: 'Bold',
              fontSize: '1.2rem',
            }}>{'High School'}</span>}
            onClick={() => pickGrade("High School")}
            id='highschool'
            name='options'
          />{" "}
          <FormControlLabel
            className={classes.btn}
            value="College_Trade"
            control={<Radio color="primary" />}
            label={<span style={{
              fontWeight: 'Bold',
              fontSize: '1.2rem',
            }}>{'College or Trade'}</span>}
            onClick={() => onClick("College or Trade")}
            id='collegetrade'
            name='options'
          />{" "}
        </RadioGroup>
      </FormControl>
      <article className={classes.parentBtn}>
        {isVisible ?
          <div className={classes.next}>
            <Button
              className={classes.nextBtn}
              onClick={Disappear}
            >
              Next
                </Button>
          </div>
          : null}
        {grade ? <GradeBtn /> : null}
      </article>
      <div className={classes.skip}>
        <Button
          className={classes.skipBtn}
          style={{ backgroundColor: 'transparent' }}
          component={Link}
          to="/resources"
          exact
        >
          Skip Form
          </Button>{' '}
      </div>
      {/* </figure> */}
      {/* </section> */}
    </div>
  );
}

export default Form;
