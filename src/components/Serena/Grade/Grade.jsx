import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import gradeStyles from "./gradeStyles.js";
import { Link } from "react-router-dom";
import bird from "../../Icons/bird.svg";
import { Button, Radio, FormControlLabel, FormControl, RadioGroup } from "@material-ui/core";
import { UserContext } from "../../currentData.jsx";

const useStyles = makeStyles(gradeStyles);

function Grade() {
    const user = useContext(UserContext);
    const classes = useStyles();

    const [isVisible, setVisibility] = useState(false);

    const onClick = (grade) => {
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
                    <div className={classes.back}>
                        <Button className={classes.nextBtn} component={Link} to="/Form">
                            Back
                        </Button>
                    </div>
                    <article>
                        <FormControl component="fieldset">
                            <RadioGroup className={classes.form} row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    className={classes.btn}
                                    value='option1'
                                    control={<Radio color="primary" />}
                                    label={<span style={{
                                        fontWeight: 'Bold',
                                        fontSize: '1.2rem',
                                    }}>{'9th Grade'}</span>}
                                    onClick={() => onClick("9th Grade")}
                                    id="option1"
                                    name='options'
                                />{" "}
                                <FormControlLabel
                                    className={classes.btn}
                                    value='option2'
                                    control={<Radio color="primary" />}
                                    label={<span style={{
                                        fontWeight: 'Bold',
                                        fontSize: '1.2rem',
                                    }}>{'10th Grade'}</span>}
                                    onClick={() => onClick("10th Grade")}
                                    id='option2'
                                    name='options'
                                />{" "}
                                <FormControlLabel
                                    className={classes.btn}
                                    value='option3'
                                    control={<Radio color="primary" />}
                                    label={<span style={{
                                        fontWeight: 'Bold',
                                        fontSize: '1.2rem',
                                    }}>{'11th Grade'}</span>}
                                    onClick={() => onClick("11th Grade")}
                                    id='option3'
                                    name='options'
                                />{" "}
                                <FormControlLabel
                                    className={classes.btn}
                                    value='option4'
                                    control={<Radio color="primary" />}
                                    label={<span style={{
                                        fontWeight: 'Bold',
                                        fontSize: '1.2rem',
                                    }}>{'12th Grade'}</span>}
                                    onClick={() => onClick("12th Grade")}
                                    id='option4'
                                    name='options'
                                />{" "}
                            </RadioGroup>
                        </FormControl>
                        {isVisible ? <NextPage /> : null}
                    </article>
                </figure>
            </section>
        </div>
    )
}

export default Grade
