import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import formStyles from "./formStyles.js";
import { Link } from "react-router-dom";
import bird from "./bird.svg";
import { Button, Radio, FormControlLabel, FormControl, RadioGroup } from "@material-ui/core";
import { UserContext } from "../../currentData.jsx";

const useStyles = makeStyles(formStyles);

function Form() {
  const user = useContext(UserContext);
  const classes = useStyles();

  // const [grade, setGrade] = useState(true);
  const [isVisible, setVisibility] = useState(false);
  const [grade, setGrade] = useState(false);

  const onClick = (grade) => {
    setGrade(false);
    setVisibility(true);
    user.setGrade(grade);
  };

  const NextPage = () => (
    <div className={classes.next}>
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

  const pickGrade = () => {
    setVisibility(false);
    setGrade(true);
  };

  const GradeBtn = () => (
    <div className={classes.next}>
      <Button
        component={Link}
        to="/grade"
        exact
        className={classes.nextBtn}
      >
        Your Grade
      </Button>
    </div>
  );
  // Below is what is displayed
  return (
    <div className={classes.background}>
      <section className={classes.header}>
        <img src={bird} alt={"Phoenix Logo"} className={classes.img} />
        <nav>
          <Button className={classes.btnLink} component={Link} to="/" exact>
            Imagication
          </Button>
        </nav>
      </section>
      <section className={classes.group}>
        <figure className={classes.body}>
          <article className={classes.container}>
            <figcaption className={classes.conText}>
              I am in . . .
            </figcaption>
          </article>
          <article>
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
                  onClick={pickGrade}
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
            {isVisible ? <NextPage /> : null}
            {grade ? <GradeBtn /> : null}
          </article>
        </figure>
      </section>
      {/* <nav className={classes.link}>
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
      </main> */}
    </div>
  );
}

export default Form;


{/* <form className={classes.form} data-toggle="buttons">
              <label className={classes.btn}>
                <Radio
                  className={classes.btnColor}
                  color='#663CBF'
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="options"
                  id="option1"
                  onClick={() => onClick("Middle School")}
                />{" "}
                <span>Middle School</span>
              </label>
              <label className={classes.btn}>
                <Radio
                  className={classes.btnColor}
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="options"
                  id="option2"
                  onClick={HighSchool}   // edit here
                />{" "}
                <span className={classes.checkmark}>High School</span>
              </label>
              <label className={classes.btn}>
                <Radio
                  className={classes.btnColor}
                  color='#663CBF'
                  checked={selectedValue === 'c'}
                  onChange={handleChange}
                  value="c"
                  name="options"
                  id="option3"
                  onClick={() => onClick("College or Trade")}
                />{" "}
                <span >College or Trade</span>
              </label>
            </form>   */}