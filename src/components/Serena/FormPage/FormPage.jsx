import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import formpageStyles from "./formpageStyles.js";
import { Link } from "react-router-dom";
import bird from "../../Icons/bird.svg";
import { Button } from "@material-ui/core";
import { UserContext } from "../../currentData.jsx";
import Form from '../Form/Form.jsx';
import Interests from '../Interests/Interests.jsx';
import Grade from '../Grade/Grade.jsx';
const useStyles = makeStyles(formpageStyles);

function FormPage() {
    const user = useContext(UserContext);
    const classes = useStyles();


    function restartForm() {
        user.setInvisible(true);
        user.setInterestsVisibility(false);
        user.setGradeVisibility(false);
    }

    // Below is what is displayed
    return (
        <div className={classes.background}>
            <section className={classes.header}>
                <img src={bird} alt={"Phoenix Logo"} className={classes.img} />
                <nav>
                    <Button
                        className={classes.btnLink}
                        component={Link}
                        to="/"
                        exact
                        onClick={restartForm}
                    >
                        Imagication
            </Button>
                </nav>
            </section>
            <section className={classes.group}>
                <figure className={classes.body}>
                    {user.invisible ? <Form /> : null}
                    {user.interestsVisibility ? <Interests /> : null}
                    {user.gradeVisibility ? <Grade /> : null
                    }

                </figure>
            </section>
        </div>
    );
}

export default FormPage;