import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import gradeStyles from "./gradeStyles.js";
import {
    Button,
    Radio,
    FormControlLabel,
    FormControl,
    RadioGroup,
} from "@material-ui/core";
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
                onClick={G2I}
                className={classes.nextBtn}
            >
                Next
          </Button>
        </div>
    );

    function G2I(e) {           //grade to interests
        user.setGradeVisibility(false);
        user.setInterestsVisibility(true);
    }

    function goBack(e) {
        user.setInvisible(true);
        user.setGradeVisibility(false);
    }
    return (
        <div>
            <article className={classes.container}>
                <figcaption className={classes.conText}>
                    I am in . . .
                        </figcaption>
            </article>
            <div className={classes.back}>
                <Button
                    className={classes.nextBtn}
                    onClick={goBack}
                >
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
        </div>
    )
}

export default Grade;
