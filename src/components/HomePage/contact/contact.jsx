import React from "react";
import { makeStyles } from "@material-ui/core";

import contactStyleSheet from './contactStyles.js';

const useStyles = makeStyles(contactStyleSheet);

function Contact() {
    const classes = useStyles();
    
    return(
            <div className={classes.mission}>
                <h1>Interested to learn more?</h1>
            </div>
    );
}

export default Contact;
